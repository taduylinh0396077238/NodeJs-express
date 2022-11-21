
exports.api = {}

exports.home = (req, res) => res.render('home')

exports.newsletterSignup = (req, res) => {
    res.render('newsletter-signup', { csrf: 'CSRF token goes here' })
}
exports.newsletterSignupProcess = (req, res) => {
        console.log('CSRF token (from hidden form field): ' + req.body._csrf)
        console.log('Name (from visible form field): ' + req.body.name)
        console.log('Email (from visible form field): ' + req.body.email)
        res.redirect(303, '/newsletter-signup/thank-you')
   }
exports.newsletterSignupThankyou = (req, res) => res.render('newsletter-signup-thank-you')
// **** end browser-submitted form handlers

exports.vacationPhotoContest = (req, res) => {
    const now = new Date() 
    res.render('contest/vacation-photo', {year: now.getFullYear(), month: now.getMonth()})
}

exports.vacationPhotoContestAjax = (req, res) => {
    const now = new Date() 
    res.render('contest/vacation-photo-ajax', {year: now.getFullYear(), month: now.getMonth()})
}

exports.vacationPhotoContestProcess = (req, res, fields, files) => {
    console.log('field data: ', fields)
    console.log('files: ', files)
    res.redirect(303, '/contest/vacation-photo-thank-you')
}

exports.vacationPhotoContestProcessError = (req, res, fields, files) => {
    res.redirect(303, '/contest/vacation-photo-error')
}

exports.vacationPhotoContestProcessThankyou = (req, res) => {
    res.redirect('contest/vacation-photo-thank-you')
}

exports.api.vacationPhotoContest = (req, res, fields, files) => {
    console.log('field data: ', fields)
    console.log('files: ', files)
    res.send({result: 'success'})
}

exports.api.vacationPhotoContestError = (req, res, message) => {
    res.send({result: 'error', error: message})
}


exports.newsletter = (req, res) => {
    res.render('newsletter' , {csrf: 'CSRF token goes here'})
}

exports.api.newsletterSignup = (req, res) => {
    console.log('CSRF token (from hidden form field): ' + req.body._csrf)
    console.log('Name (from visible form field): ' + req.body.name )
    console.log('Email (from visible form field): ' +  req.body.email)
    res.send({ result: 'success' })

}

exports.notFound = (req, res) => res.render('404')


exports.serverError = (err, req, res, next) => {
    res.render('500')
}