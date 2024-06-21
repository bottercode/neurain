import AWS from 'aws-sdk';

export async function uploadToS3(file: File) {
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

    const file_key =
      'uploads/' + Date.now().toString() + file.name.replace('', '-');

    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
      Key: file_key,
      Body: file
    };

    const upload = s3.upload(params).promise();

    await upload.then(data => {
      console.log('Uploaded to S3', data);
    });

    return Promise.resolve({file_key, file_name: file.name});
  } catch (error) {
    console.error(error);
    throw new Error('Failed to upload to S3');
  }
}

export function getS3Url(file_key: string) {
  return `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${file_key}`;
}
