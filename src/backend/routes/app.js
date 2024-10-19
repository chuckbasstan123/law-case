// backend/app.js
const express = require('express');
const s3Routes = require('./routes/s3');

const app = express();
app.use(express.json());

app.use('/api/s3', s3Routes);

app.listen(5000, () => console.log('Server running on port 5000'));
