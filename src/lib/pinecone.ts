import {
  Pinecone,
  PineconeRecord,
  RecordMetadata
} from '@pinecone-database/pinecone';
import {PDFLoader} from '@langchain/community/document_loaders/fs/pdf';
import {downloadFromS3} from './db/s3-server';
import {
  Document,
  RecursiveCharacterTextSplitter
} from '@pinecone-database/doc-splitter';
import {getEmbeddings} from './db/embeddings';
import md5 from 'md5';
import {Vector} from '@pinecone-database/pinecone/dist/pinecone-generated-ts-fetch';
import {convertToASCII} from './utils';

let pinecone: Pinecone | null = null;

export const getPineconeClient = async () => {
  if (!pinecone) {
    pinecone = new Pinecone({apiKey: process.env.PINECONE_API_KEY!});
  }
  return pinecone;
};

type PDFPage = {
  pageContent: string;
  metadata: {
    loc: {pageNumber: number};
  };
};

export async function loadS3IntoPinecone(fileKey: string) {
  const file_name = await downloadFromS3(fileKey);
  if (!file_name) {
    throw new Error('Failed to download. Internal server error');
  }

  const loader = new PDFLoader(file_name);
  const pages = (await loader.load()) as PDFPage[];

  //split and segment the pdf
  const documents = await Promise.all(pages.map(prepareDocument));
  console.log('documents', documents);

  //vectorise and embed individual documents
  const vectors = await Promise.all(documents.flat().map(embedDocument));
  console.log('vectors', vectors);

  //upload to pinecone
  const client = await getPineconeClient();
  console.log('client', client);

  const pineconeIndex = client.Index('neurain');
  const namespace = pineconeIndex.namespace(convertToASCII(fileKey));
  console.log('inserting vectors in pinecone');

  await namespace.upsert(vectors as PineconeRecord<RecordMetadata>[]);
  return documents[0];
}

export async function embedDocument(doc: Document) {
  try {
    const embeddings = await getEmbeddings(doc.pageContent);
    const hash = md5(doc.pageContent);

    return {
      id: hash,
      values: embeddings,
      metadata: {
        text: doc.metadata.text,
        pageNumber: doc.metadata.pageNumber
      }
    } as Vector;
  } catch (error) {
    console.log('error embedding document', error);
    throw new Error('Failed to embed document');
  }
}

export const truncateStringByBytes = (str: string, bytes: number) => {
  const enc = new TextEncoder();
  return new TextDecoder('utf-8').decode(enc.encode(str).slice(0, bytes));
};

export async function prepareDocument(page: PDFPage) {
  let {pageContent, metadata} = page;

  pageContent = pageContent.replace(/(\r\n|\n|\r)/gm, ' ');
  const splitter = new RecursiveCharacterTextSplitter();
  const docs = await splitter.splitDocuments([
    new Document({
      pageContent,
      metadata: {
        pageNumber: metadata.loc.pageNumber,
        text: truncateStringByBytes(pageContent, 38000)
      }
    })
  ]);

  return docs;
}
