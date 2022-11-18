
const express = require('express')
const app = express();

app.get('/greeting', (req, res) => {
    res.render('greeting', {
        message: 'Hello esteemed programmer',
        style: req.query.style,
        userid: req.cookies.userid,
        username: req.session.username
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})