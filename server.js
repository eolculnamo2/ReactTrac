require('dotenv').config();
var express = require('express');
var app = express();
//routes
var routes = require('./routes/routes');
var authentication = require('./routes/authentication');

app.use('/', routes);
app.use('/authenticate', authentication);

app.use(express.static('assets/dist'));

app.listen(3000,()=>{
    console.log('On...')
})
