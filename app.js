const express = require('express')
const app = express()
var path = require('path');
var fs = require('fs');
var markdown = require('marked')
app.set("view engine", "pug")
app.set("views",path.join(__dirname,"views"));
app.get('/:id', (req, res) => {
    fs.readFile('content/' + req.params.id + '/index.md', 'utf8',  (err,content) => {
    if (err) {
    res.status(404).send('Page not found');
    }
    else {
        console.log(content)
        const pugContent = marked(content)
        console.log(pugContent)
        res.render('template',{content:pugContent});
    }
});
});
    

app.listen(3000, () => console.log('Example app listening on port 3000!'));