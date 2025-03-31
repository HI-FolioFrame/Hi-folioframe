const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  try {
    const url = new URL(req.protocol + '://' + req.get('host') + req.originalUrl);
    const subject = url.searchParams.get('name') || 'World';

    res.json({ message: `Hello ${subject}` });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports.handler = serverless(app);
