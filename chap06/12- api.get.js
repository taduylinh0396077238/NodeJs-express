
const express = require('express')
const app = express();

app.get('/api/tours', (req, res) => res.json(tours))

app.listen(3000, () => {
    console.log('listening on port 3000');
})