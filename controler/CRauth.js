var db = require('../modules/Mauth');

//_____________________________________control route logout____________________________________//
module.exports.Clogout=(req,res,next)=>{
    req.session.destroy()
    res.render('index');
}
//_____________________________________________________________________________________________//

//____________________________________control route login page_________________________________//
module.exports.Clogin = (req,res,next)=>{
    if(req.session.username&&req.session.loggedin){
        res.redirect('/')}
     else{res.render('index')} 
 }
 //____________________________________________________________________________________________//

//____________________________________control route login parsing______________________________//
 module.exports.Cloginp = (req,res,next)=>{
  
    var username = req.body.username;       var password = req.body.password;
        if (username && password) {


            db.con.query('SELECT * FROM admin WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
               if(error){
                   console.log('error database authintcation27')
               }
               else{

               
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.username = username;
                    console.log(req.session.username)
                    res.redirect('/');} else {res.redirect('/login');}	
                }		
            });
        
        }
    
    
    }
//_____________________________________________________________________________________________//



//____________________________________control editInfo parsing______________________________//
module.exports.CeditInfo = (req,res,next)=>{
  
    var infoUsername = req.body.infoUsername;       var infoPassword = req.body.infoPassword;     var infoRepassword = req.body.infoRepassword;
        if (infoUsername && infoPassword && infoRepassword && req.session.username) {
console.log("update info    ")

            db.con.query('UPDATE admin SET username = ? , password = ? WHERE username = ? ', [ infoUsername , infoPassword , req.session.username], function(error, results, fields) {
                if(error){
                    console.log('error database authintcation58')
                }
            else{
                if (results.length > 0) {
                    req.session.destroy()
                    res.redirect('/login');} 
                    else {                   
                        req.session.destroy()
                        res.redirect('/login');}	
                    }		
            });

        }
    
    
    }
//_____________________________________________________________________________________________//
