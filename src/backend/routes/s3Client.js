// src/utils/s3Client.js
import { S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.REACT_APP_AWS_REGION || 'us-west-1',
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || '',
  },
});

export default s3Client;
