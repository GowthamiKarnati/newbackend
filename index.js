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
app.get('/sendpostrequest', async (req, res) => {
      try {
        const url = 'https://riktam.tigersheet.com/api/sheet-api/get-records';
        const headers = {
          'Authorization': 'C9B53439FA03FB946C93E9AC9963070B221EC0E3CD66399A',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };  
        const payload = {
          'sheet_id': '78425244',
        };
        const response = await axios.post(url, payload, { headers });
        console.log('Response from Tigersheet', response.data);
        res.send(response.data);
      } catch (error) {
        console.error('Error in post request:', error.message);
        res.status(500).send('Internal Server Error');
      }
    });
app.listen(4000)