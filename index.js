const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, welcome to Tigersheet!');
});

app.listen(4000)