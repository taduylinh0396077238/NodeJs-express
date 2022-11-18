
const express = require('express')
const app = express();

const expressHandlebars = require('express-handlebars')

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.listen(3000, () => {
    console.log('listening on port 3000');
})