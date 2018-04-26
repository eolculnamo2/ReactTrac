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

router.use(express.static('assets/dist'));

router.use(cookieSession({
  keys: ["dlskjfhaslfj"],
  maxAge: 24*60*60*1000,
  secure: false
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
            res.send(err)
        }
        else{
        passport.authenticate('local')(req, res, ()=>{
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
router.post('/login', passport.authenticate('local'), (req, res)=>{
  if(req.user){
    console.log(JSON.stringify(req.session))
  //  res.redirect('/')
    res.send({
      name: 'authenticated'
    });

  }
  else{
    res.send({
      name: 'invalid-credentials'
    })
  }
});

//Logout
router.get('/logout',(req,res)=>{
  console.log(JSON.stringify(req.session))
  console.log(JSON.stringify(req.user))
  req.logout();
  res.send({name: 'success'})
});

router.get('/checkLogin',(req,res)=>{
  console.log(JSON.stringify(req.session))
  if(req.user){
    res.json({name: 'authenticated'})
  }
  else if(!req.user){
    res.json({name: 'Unauthenticated'})
  }
})

module.exports = router;
