const express = require('express');   const app = express()
const jwt = require('jsonwebtoken')   // like session but we use with api
const path = require ('path')
const Rauth = require('./routes/Rauth')
const Rhome = require('./routes/Rhome')
const { exec } = require('child_process');



var MPD = require('node-mpd');

var mpd = new MPD({
	host : "localhost",
	port : process.env.MPD_PORT
});


//____________________________________________________________________________________________//



//______________________________________socket io_____________________________________________//
const server =require('http').createServer(app)
// const io= require('socket.io')(server)
// //music
// io.on('connection',  (socket)=> {
//   console.log('New Connection ');

//     // mpd.connect();  


// });



// //____________________________________________________________________________________________//
  // session
const session = require('express-session')
app.use(session({
    secret : "hello",
    resave: true,
    saveUninitialized: true,
    cookie : {
      maxAge:(1000 * 60 * 100)
}   // 1 hour (in milliseconds)
   }))
   module.exports =session;
// body parser
const bodypa = require('body-parser') // bodyparser   use with normal server & api by json
app.use(bodypa.urlencoded({extended : true}))
app.use(bodypa.json())
//____________________________________________________________________________________________//
//____________________________________________________________________________________________//
// view engine/
app.set('view engine','ejs')
app.set('views','views')
// static files
app.use(express.static(path.join(__dirname ,"assets")))
//____________________________________ mideleware_____________________________________________//      
//                                        main page     login page            login page parse            logout ajax
app.use('/editInfo',Rauth);       app.use('/',Rhome);    app.use('/',Rauth);     app.use('/',Rauth);      app.use('/',Rauth);
// parsing logout   by clear session   (redirect inside front end)
//____________________________________________________________________________________________//
//_______________________________________________mpd___________________________________________//
//____________________________________________________________________________________________//
// listning
let myport=2303
server.listen(myport,()=>{
  console.log('listening on port',myport)
  
})