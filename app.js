var express = require('express');
var path = require('path');
var app = express();
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'view')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.listen(8000, '0.0.0.0', function() {
    console.log("escuchando puerto 8000");
});




module.exports = app;