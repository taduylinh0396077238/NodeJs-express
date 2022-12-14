const express = require('express')
const expressHandlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const catNames = require('cat-names')
const app = express()
const path = require('path')


//the following is needed to use view 
app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.set('views', path.join(__dirname, 'views'))
//the following is needed for cookie support
app.use(cookieParser())

//the following is needed for session support
app.use(session({ resave: false, saveUninitialized: false, secret: 'keyboard cat'}))


//see the views/greeting.hbs file forthe contents of this view
app.get('/greeting', (req, res) => {
    res.render('greeting', {
        message: 'Hello esteemed programmer!',
        style: req.query.style,
        userid: req.cookies.userid,
        username: req.session.username
    })
})


app.get('/set-random-userid', (req, res) => {
    res.cookie('userid',  (Math.random()*10000).toFixed(0))
    res.redirect('/greeting')
})


app.get('/set-random-username', (req, res) => {
    req.session.username = catNames.random()
    res.redirect('/greeting')
})


app.get('*', (req, res) => res.send('Check out our <a href="/greeting>gressting</a> page '))

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}/greeting\n`))