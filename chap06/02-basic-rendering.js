const express = require('express')
const app = express();

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})