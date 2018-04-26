var express = require('express')
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Category = require('../models/Category');
var Ticket = require('../models/Ticket');
var email = require('./mailer');

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

function getTime(){
  var d = new Date();
  //timestamp broke... see DB
  return d.getFullYear()+"/"+d.getMonth()+"/"+d.getDay()+" "+d.getHours()+":"+d.getMinutes();
}
router.post('/newCategory',(req,res)=>{

})

router.post('/newTicket',(req,res)=>{
  var submission = req.body;
  var timestamp = getTime();

  new Ticket({
    name: submission.name,
    assignedTo: submission.assignedTo,
    assignedBy: "req.user.username",
    assignedByID: "req.user.id",
    priority: submission.priority,
    createDate: timestamp,
    dueDate: submission.dueDate,
    category: submission.category,
    status: submission.status,
    description: submission.description,
    comments: []
  }).save().then(()=>{
    returnTickets(res)
  })
})

router.post('/getTickets',(req,res)=>{
  returnTickets(res)
})

router.post('/postComment',(req,res)=>{
  var comment = req.body;
  var timestamp = getTime();

    var newComment = {
      author: "Testuser(req.user.usernam)",
      timestamp: timestamp,
      status: req.body.status,
      comment: req.body.comment
    }

    Ticket.findOneAndUpdate({id: comment.id}, {$push: {comments: newComment}},(err,newInfo)=>{
      console.log("New Ticket "+ JSON.stringify(newInfo,null,3))
    })
})

module.exports=router;
