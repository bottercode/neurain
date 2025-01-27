import {db} from '@/lib/db';
import {chats} from '@/lib/db/schema';
import {loadS3IntoPinecone} from '@/lib/pinecone';
import {getS3Url} from '@/lib/s3';
import {auth} from '@clerk/nextjs/server';

export async function POST(req: Request, res: Response) {
  const {userId} = await auth();

  if (!userId) {
    return Response.json({error: 'unauthorized', status: 401});
  }

  try {
    const body = await req.json();
    const {file_key, file_name} = body;
    const data = await loadS3IntoPinecone(file_key);

    console.log('DATA from s3', data);
    const chat_id = await db
      .insert(chats)
      .values({
        fileKey: file_key,
        pdfName: file_name,
        pdfUrl: getS3Url(file_key),
        userId
      })
      .returning({
        insertedId: chats.id
      });

    console.log('chat_id', chat_id);

    return Response.json({chat_id: chat_id[0].insertedId, status: 200});
  } catch (error) {
    console.error(error);
    return Response.json({error: 'internal server error', status: 500});
  }
}
