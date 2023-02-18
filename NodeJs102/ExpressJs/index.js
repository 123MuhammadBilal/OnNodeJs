const express = require('express')
const path = require("path")

//how to show HTML pages in Sever in Node js

// app.get('',(req,resp)=>{
//     // console.log('requested by ' + req.query.name)
//     // resp.send('<h1>hello,'+ req.query.name+"</h1>")
//     resp.send(`
//     <a href="/" >Home</a>
//     <a href="/about" >about</a>
//     <a href="/help" >about</a>
//     `)
// });

// app.get('/about',(req,resp)=>{
//     resp.send(`
//     <input type="text" value="${req.query.name}" >
//     <button>clickMe</button>
//     <a href="/" >Home</a>
//     <a href="/help" >Help</a>
//     `)
// });

// app.get('/help',(req,resp)=>{
//     resp.send(`
//     <a href="/" >Home</a>
//     <a href="/about" >about</a>
//     `)
//     // resp.send([
//     //     {
//     //         username:"bilal",
//     //         gmail:"bilal@gmail.com"
//     //     },
//     //     {
//     //         username:"KK@DEV",
//     //         gmail:"KK@DEV.com"
//     //     }
//     // ])
// });
const app = express();
const publicPath = path.join(__dirname,"public")
app.set('view engine','ejs');
// static use of website
app.use(express.static(publicPath))

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});
app.get('/profile',(_,resp)=>{
    const user={
        username:"muhammadbilal",
        gmail:"kkmuhammadbilal@gmail.com",
        city:"Hasilpur",
        skills:["js","python","Node","shopify","nodeexpress","liquid","React","c","cpp","Linux","css","sccs","html","html5"]
    };
    resp.render('profile',{user})
});

app.get('/about',(_,resp)=>{
    resp.render('about')
});
app.get('/help',(_,resp)=>{
    resp.render('help')
});
app.get('/home',(_,resp)=>{
    resp.render('home')
});
app.get('/login',(_,resp)=>{
    resp.render('login')
});
app.get('/profile',(_,resp)=>{
    resp.render('profile')
});
app.get('/Contact',(_,resp)=>{
    resp.render('contact')
});
// app.get('/aboutUs',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// });

// app.get('/getHelp',(_,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
// });
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
});

app.listen(3330);
