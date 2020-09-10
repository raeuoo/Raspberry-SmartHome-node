var db = require('../modules/Mauth');

//________________________________control route home page______________________________________//

module.exports.Chome=(req,res,next)=>{
    if(!req.session.username&&!req.session.loggedin){res.redirect('/login')}
    else {



      db.con.query("SELECT * FROM admin WHERE username = ? ",[req.session.username] , function (err, result, fields) {
        if (err) {
          console.log('database erorr')
        }
       else{
          res.render('smarthome',{
          username : req.session.username,
          id:result[0].id,
          name:result[0].name,
          permission:result[0].permission,
          admin:result[0].admin,
          img:result[0].img
          
      });
    }

   
    }) }
  }
  //___________________________________________________________________________________________//
