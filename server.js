require('dotenv').config();

var express = require('express');
var app = express();
//routes
var routes = require('./routes/routes');
var authentication = require('./routes/authentication');
var posts = require('./routes/posts');

app.use('/', routes);
app.use('/authenticate', authentication);
app.use('/posts', posts);

app.use(express.static('assets/dist'));

app.listen(process.env.PORT || 3000,()=>{
    console.log('On...')
})
