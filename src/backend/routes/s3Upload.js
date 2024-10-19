// src/utils/s3Upload.js
import { PutObjectCommand } from '@aws-sdk/client-s3';
import s3Client from './s3Client'; // Import your configured S3 client

const uploadToS3 = async (file, userName, folderName) => {
  const key = `${userName}/${folderName}/${file.name}`; // S3 path with user and folder names

  const params = {
    Bucket: process.env.REACT_APP_AWS_BUCKET_NAME, // Bucket name from env
    Key: key,
    Body: file,
  };

  try {
    const result = await s3Client.send(new PutObjectCommand(params));
    console.log(`Successfully uploaded ${file.name}`, result);
  } catch (error) {
    console.error('Error uploading to S3:', error);
  }
};

export default uploadToS3;
