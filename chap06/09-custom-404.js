
const express = require('express')
const app = express();

app.use((req, res) =>
 res.status(404).render('404')
)


app.listen(3000, () => {
    console.log('listening on port 3000');
})