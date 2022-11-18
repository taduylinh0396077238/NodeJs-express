
const express = require('express')
const app = express();

app.get('/error', (req, res) => {
    res.status(500)
    res.render('error')
})



app.listen(3000, () => {
    console.log('listening on port 3000');
})