// =======================================================
// =======================================================

var user = "username@gmail.com"
var pass = "passwordHere"
var sendto = "username@gmail.com"
var subjectLine = "subject line here"
var text = "this is the body of the message"

// =======================================================
// =======================================================


'use strict';
const nodemailer = require('nodemailer');
var cron = require('node-cron');


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Joe" <foo@blurdybloop.com>', // sender address
    to: sendto, // list of receivers
    subject: subjectLine, // Subject line
    text: text, // plain text body
};


// * * * * * * will run every second
cron.schedule('* * * * * *', function(){

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message %s sent: %s', info.messageId, info.response);
	});

});


