app.get('/about', (req, res) => {
    const randomFortune =
   fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', { fortune: randomFortune })
   })
   