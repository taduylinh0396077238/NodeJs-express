const  fortune = require('./lib/fortune');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000 


app.get('/about', (req, res) => {
    res.render('about', { fortune: fortune.getFortune()})
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + `press Ctrl-C to terminate.`))
   