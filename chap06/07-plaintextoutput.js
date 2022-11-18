
const express = require('express')
const app = express();

app.get('/text', (req, res) => {
    res.type('text/plaib')
    res.send('this is a test')
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})