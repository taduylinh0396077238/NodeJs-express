
const express = require('express')
const app = express();

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
        helpers: {
    section: function(name, options) {
                if(!this._sections) this._sections = {}
                    this._sections[name] = options.fn(this)
                return null
            },
        },
   }))
   

app.listen(3000, () => {
    console.log('listening on port 3000');
})