var express = require('express');
var routes = require('./routes/routes');
var app = express();

app.use('/', routes);
app.use(express.static('assets/dist'));

app.listen(3000,()=>{
    console.log('On...')
})