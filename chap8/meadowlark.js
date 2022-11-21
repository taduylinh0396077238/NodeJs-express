const path = require('path')
const express = require('express')
const expressHandlerbars = require('express-handlebars')
const bodyParser = require('body-parser')
const multiparty = require('multiparty')
const handlers = require('./lib/handlers')
const weatherMiddleware = require('./lib/middleware/weather')
const app = express()



app.engine('hbs', expressHandlerbars.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {}
            this._sections[name] = options.fn(this)
            return null
        }
    }
}))
app.set('view engine', 'hbs')
// app.set('views', path.join(__dirname, 'views'))


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
app.use(weatherMiddleware)

app.get('/', handlers.home)

app.get('/newsletter-signup', handlers.newsletterSignup)
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess)
app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankyou)


app.get('/newsletter', handlers.newsletter)
app.post('/api/newsletter-signup', handlers.api.newsletterSignup)

app.get('/contest/vacation-photo', handlers.vacationPhotoContest)
app.get('/contest/vacation-photo-ajax', handlers.vacationPhotoContestAjax)
app.post('/contest/vacation-photo/:year/:month', (req, res) => {
    const form = new multiparty.Form()
    form.parse(req, (err, fields, files) => {
        if (err) return handlers.vacationPhotoContestProcessError(req, res, err.message)
        console.log('got fields: ' + fields)
        console.log('got files: ' + files)
        handlers.vacationPhotoContestProcess(req, res, fields, files)
    })
})

app.get('contest/vacation-photo-thank-you', handlers.vacationPhotoContestProcessThankyou)
app.post('/api/vacation-photo-contest/:year/:month', (req, res) => {
    const form = new multiparty.Form()
    form.parse(req, (err, fields, files) => {
        if(err) return handlers.vacationPhotoContestProcessError(req, res, err.message)
        handlers.api.vacationPhotoContest(req, res, fields, files)
    })
})

app.use(handlers.notFound)
app.use(handlers.serverError)


if(require.main === module){
    app.listen(port, () => {
        console.log(`Express started on http://localhost:${port}` + 
            '; press Ctrl-C to terminate')
    })
} else {
    module.exports = app
}