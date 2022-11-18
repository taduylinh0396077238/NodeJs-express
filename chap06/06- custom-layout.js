
const express = require('express')
const app = express();

app.get('/custom-layout', (req, res) =>
 res.render('custom-layout', { layout: 'custom' })
)

app.listen(3000, () => {
    console.log('listening on port 3000');
})