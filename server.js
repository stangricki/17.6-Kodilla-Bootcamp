var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/auth/google', (req, res) => {
    if (req.query.password === 'yt') {
        res.redirect(301, 'https://youtube.com');        
    } else if (req.query.password === 'fb') {
        res.redirect(301, 'https://facebook.com');
    } else if (req.query.password === 'inst') {
        res.redirect(301, 'https://instagram.com');
    } else {
        res.render('error', {
            info: 'There is no such password',
            url: 'http://localhost:3000/'
        });
    }
});


app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send("Sorry, but we couldn't find what are you looking for")
});

