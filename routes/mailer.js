var nodemailer = require('nodemailer');
var express = require('express')
var path = require('path')
var fs = require('fs')

module.exports = {
    ticketUpdate: function(userEmail){

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rbertramCode@gmail.com',
                pass: process.env.EMAIL_PASS
            }
        });

    fs.readFile(path.join(__dirname,"..","/public/emails/assignedEmail.html"),"utf8",(err,info)=>{
        let mailOptions = {
            from: 'rbertramCode@gmail.com',
            to: userEmail,
            subject: "New ReactTrac Activity",
            text: "ReactTrac Activity",
            html: info
        }
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
                console.log(err)
            else
                console.log(info);
            });
        });
    },
    welcomeUser: function(userEmail){

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rbertramCode@gmail.com',
                pass: process.env.EMAIL_PASS
            }
        });

    fs.readFile(path.join(__dirname,"..","/public/emails/welcomeEmail.html"),"utf8",(err,info)=>{
        let mailOptions = {
            from: 'rbertramCode@gmail.com',
            to: userEmail,
            subject: "Welcome to ReactTrac",
            text: "ReactTrac Activity",
            html: info
        }
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
                console.log(err)
            else
                console.log(info);
            });
        });
    }

} //Ends Exports
