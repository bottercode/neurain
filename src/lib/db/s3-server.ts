import fs from 'fs';
import AWS from 'aws-sdk';
import path from 'path';
import os from 'os';

export async function downloadFromS3(file_key: string) {
  try {
    AWS.config.update({
      region: process.env.NEXT_PUBLIC_AWS_REGION,
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!
      }
    });

    const s3 = new AWS.S3({
      region: process.env.NEXT_PUBLIC_AWS_REGION!,
      params: {
        Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!
      }
    });

    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
      Key: file_key
    };

    const obj = s3.getObject(params).promise();
    const tempDir = os.tmpdir();

    const file_name = path.join(tempDir, `pdf-${Date.now()}.pdf`);
    fs.writeFileSync(file_name, (await obj).Body as Buffer);
    return file_name;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to download from S3');
  }
}
