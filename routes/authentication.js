var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser')
var express = require('express');
var passport = require('passport');
var router = express.Router();
var Strategy = require('passport-local').Strategy;

//models
var User = require('../models/User');

router.use(cookieSession({
  name: 'Authentication',
  maxAge: 60*60*1000,
  keys: [process.env.KEY]
}))

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Register New User
router.post('/register', (req, res)=>{
  if(req.body.password === req.body.confirmPassword){
    User.register(new User({
                             username : req.body.username,
                             email: req.body.email,
                             authority: false,
                             }), req.body.password, (err, account)=>{
        if (err) {
            console.log(err.name)
            console.log("Unauthenticated")
            res.send(err)
        }
        else{
        passport.authenticate('local')(req, res, ()=>{
          console.log("authenticated")
            res.send({
                name: 'authenticated'
            });
        });
        }
    });
  }
  else{
    res.send("Passwords Do Not Match");
  }
});


//Login
router.post('/login', passport.authenticate('local'), function(req, res) {
  console.log(req.user)
  if(req.user){
    console.log('login success')
    res.send({
      name: 'authenticated'
    });

  }
  else{
    console.log('login fail')
    res.send({
      name: 'invalid-credentials'
    })
  }
});

//Logout
router.get('/logout',(req,res)=>{
  req.logout();
  res.send({name: 'success'})
});

router.get('/checkLogin',(req,res)=>{
  console.log(req.user)
  if(req.user){
    res.json({name: 'authenticated'})
  }
  else if(!req.user){
    console.log('failed')
    res.json({name: 'Unauthenticated'})
  }
})

module.exports = router;
