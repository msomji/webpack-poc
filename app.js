const express = require('express'),
    app = express(),
    path = require('path');

app.listen(3000);
console.log('node app is now runnin at 3000');

app.use(express.static(path.join(__dirname, 'build')));

app.set('view-engine', 'pug');

app.get('/', (req, res, next) => {
    res.render('index.pug');
});

app.get('/trial', (req, res, next) => {
    res.render('trial.pug');
});


module.exports = app;
