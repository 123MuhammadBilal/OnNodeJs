const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const dName = "alwahabmobiles";
const uri = `mongodb://127.0.0.1:27017/${dName}`;
const port = process.env.PORT || 5000;

// some important 
// APIs
// get - read
// post - create
// put - update
// delete - delete
// app.get( Route , callback )

// console.log(__dirname)
// console.log(path.join(__dirname, 'public'))

// set the view engine
app.set('view engine', 'hbs');

// static path
const staticPath= path.join(__dirname, 'public');

// built in mildware that is express.static()
app.use(express.static(staticPath)); 



app.get( "/" ,( req , res )=>{
    res.render("index");
})
app.get( "/about" ,( req , res )=>{
    res.render("about");
})
app.get( "/contact" ,( req , res )=>{
    res.render("contact");
})
app.get( "/*" ,( req , res )=>{
    res.render("not");
})

app.listen(port,()=>{
    console.log(`listening the port no ${port}`);
})

// ==================================CONNECTION OF DATA BASE================================

//backed data base 
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to database!');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });

  // ==================================DONE================================
  app.post('/subscription_from', function (req, res) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kkmuhammadbilal2@gmail.com',
        pass: 'epkqmckonglpvjua'
    }
  });
  
  // setup email data with unicode symbols
  let mailOptions = {
  from: 'kkmuhammadbilal2@gmail.com', // sender address
  to: 'kkmuhammadbilal2@gmail.com', // list of receivers
  subject: 'Web Subscription', // Subject line
  text: 'Thanks for Subscription you will uptodate', // plain text body
  html: '<h1>FOR MORE<h1><br><a href="tel:+92305 769 2658" >Contact with Developer</a><br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisFXfjVw8WUmBPXoLmmZXnUm1jgRfXzuglHLEI0Jt3Q5bV8_lfxLFbyi-_W5J6xkTrjA&usqp=CAU" alt="">' // html body
  };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (res,error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent: %s', info.messageId);
    }
  });
  res.redirect("/");
});