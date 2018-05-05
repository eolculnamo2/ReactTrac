var express = require('express')
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Category = require('../models/Category');
var email = require('./mailer');

//imported models
var Ticket = require('../models/Ticket');
var User = require('../models/User');
var Category = require('../models/Category');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

function returnTickets(nestedResponse){
  Ticket.find({},(err,tickets)=>{
    if(err){
      console.log(err);
    }
    else{
      nestedResponse.send(tickets);
    }
  })
}

function returnCategories(nestedResponse){
  Category.find({},(err,categories)=>{
    if(err){
      console.log(err);
    }
    else{
      nestedResponse.send(categories);
    }
  })
}

function getTime(){
  var d = new Date();
  var m = d.getMonth()+1;
  return d.getFullYear()+"/"+m+"/"+d.getDate()+" "+d.getHours()+":"+d.getMinutes();
}

router.post('/newTicket',(req,res)=>{
  var submission = req.body;
  var timestamp = getTime();

  new Ticket({
    name: submission.name,
    assignedTo: submission.assignedTo,
    assignedBy: req.user.username,
    assignedByID: req.user.id,
    priority: submission.priority,
    createDate: timestamp,
    dueDate: submission.dueDate,
    category: submission.category,
    status: submission.status,
    description: submission.description,
    comments: []
  }).save().then(()=>{
    returnTickets(res);
    //Will call nodemailer function to assignedTo email here
  })
})

router.post('/getTickets',(req,res)=>{
  returnTickets(res);
})

router.post('/getUsers',(req,res)=>{
  User.find({},(err,users)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(users);
    }
  })
})

router.post('/postComment',(req,res)=>{
  var timestamp = getTime();

    var newComment = {
      author: req.user.username,
      assignedTo: req.body.assignedTo,
      timestamp: timestamp,
      status: req.body.status,
      comment: req.body.comment
    }

    Ticket.findOneAndUpdate({createDate: req.body.created,
                            assignedBy: req.body.assignedBy}, {$push: {comments: newComment},$set: {assignedTo: req.body.assignedTo}},{new: true},(err,newInfo)=>{
      if(err){
        console.log(err)
        res.send({status: "fail"})
      }
      else{
        res.send({status: "success"})
      }
    })
})

router.post('/addCategory',(req,res)=>{
  new Category({name: req.body.categoryName}).save().then(()=>{
    returnCategories(res);
  })
})

router.post('/getCategories',(req,res)=>{
  returnCategories(res);
})

module.exports=router;
