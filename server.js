require('dotenv').config();


/*
Sprint 1: Managing tickets full stack
Sprint 2: Add different teams(More than one team can use app)
Sprint 3: Improve UI
*/
var express = require('express');
var app = express();
//routes
var authentication = require('./routes/authentication');
var routes = require('./routes/routes');
var posts = require('./routes/posts');

app.use(express.static('assets/dist'));

app.use('/authenticate', authentication);
app.use('/', routes);
app.use('/posts', posts);



app.listen(process.env.PORT || 3000,()=>{
    console.log('On...')
})
