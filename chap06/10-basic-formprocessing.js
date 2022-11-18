
const express = require('express')
const app = express();

app.post('/process-contact', (res, req) => {
    console.log(`received contact form ${req.body.name} `)
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})