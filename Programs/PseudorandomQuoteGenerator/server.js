const express = require('express');
const app = express(); 
const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
});

app.use(express.static('public'));

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
})
