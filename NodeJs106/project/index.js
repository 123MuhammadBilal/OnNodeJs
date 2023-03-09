const express = require("express");
const app = express();
const path = require('path');
 const port = 5000;

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


