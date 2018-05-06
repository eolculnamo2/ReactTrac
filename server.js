require('dotenv').config();
/*
Sprint 1: Managing tickets full stack
Sprint 2: Add different teams(More than one team can use app)
Sprint 3: Improve UI
*/
var express = require('express');
var passport = require('passport');
var session = require('express-session');
var app = express();
//routes
var authentication = require('./routes/authentication');
var routes = require('./routes/routes');
var emails = require('./routes/emails');
var posts = require('./routes/posts');

app.use(express.static('assets/dist'));

app.use(session({ secret: process.env.KEY,
                    resave: false,
                    saveUninitialized: false,
                    cookie: { maxAge: 60*60*1000, secure: false, httpOnly: false }}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/authenticate', authentication);
app.use('/', routes);
app.use('/posts', posts);
app.use('/email', emails);



app.listen(process.env.PORT || 3000,()=>{
    console.log('On...')
})
