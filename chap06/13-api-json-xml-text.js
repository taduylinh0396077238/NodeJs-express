
const express = require('express')
const app = express();

app.get('/app/tours', (req, res) => {
    const toursXml = '<?xml version= "1.0"?><tours>' + 
    tours.map(p => `<tour price= "${p.price}" id="${p.id}">${p.name}</tour>`)
    .join('') + '</tours>'

    const toursText = tours.map(p =>
        `${p.id}: ${p.name} (${p.price})`
        ).join('\n')
        res.format({
        'application/json': () => res.json(tours),
        'application/xml': () =>
       res.type('application/xml').send(toursXml),
        'text/xml': () => res.type('text/xml').send(toursXml),
        'text/plain': () => res.type('text/plain').send(toursXml),
        })
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})