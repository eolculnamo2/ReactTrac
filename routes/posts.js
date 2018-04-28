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
  var m = d.getMonth()+1;
  return d.getFullYear()+"/"+m+"/"+d.getDate()+" "+d.getHours()+":"+d.getMinutes();
}
router.post('/newCategory',(req,res)=>{

})

router.post('/newTicket',(req,res)=>{
  console.log(req.session)
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
    returnTickets(res)
    //Will call nodemailer function to assignedTo email here
  })
})

router.post('/getTickets',(req,res)=>{
  returnTickets(res)
})

router.post('/postComment',(req,res)=>{
  var timestamp = getTime();

    var newComment = {
      author: req.user.username,
      timestamp: timestamp,
      status: req.body.status,
      comment: req.body.comment
    }

    Ticket.findOneAndUpdate({createDate: req.body.created, assignedBy: req.body.assignedBy}, {$push: {comments: newComment}},(err,newInfo)=>{
      if(err){
        console.log(err)
        res.send({status: "fail"})
      }
      else{
        res.send({status: "success"})
      }
    })
})

module.exports=router;
