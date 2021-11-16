const dotenv = require('dotenv');
dotenv.config();

// Configuring environment variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');
const axios = require('axios');

const PORT = 8081;

const API_URL = 'https://api.meaningcloud.com/sentiment-2.1';

const apiKey = process.env.API_KEY


// Start an instance for the server
const app = express();

// Cors for cors-origin allowance
app.use(cors());

// Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure express static directory.
app.use(express.static('dist'));

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

app.post('/add-url', async (req, res) => {

    const userInput = req.body.url
    const URL = `${API_URL}?key=${apiKey}&url=${userInput}&lang=en`
    console.log(URL)
    try {
        const data = await axios(URL)
        const finalData = data.data
        res.json({
            text: finalData.sentence_list[0].text,
            score_tag: finalData.score_tag,
            agreement: finalData.agreement,
            subjectivity: finalData.subjectivity,
            confidence: finalData.confidence,
            irony: finalData.irony
        })
        res.send(finalData);
        return finalData
    }

    catch (error) {
        console.log(error.message)
        res.json({
            status: 'error',
            message: 'Error: failed to fetch data'
        })
    }
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Setup Server
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
});
