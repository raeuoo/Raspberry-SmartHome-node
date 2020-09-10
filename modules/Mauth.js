//_________________________________________my sql______________________________________________//

var mysql = require('mysql');
var con = mysql.createPool({
  multipleStatements: true,
  connectionLimit: 200,
  host: "localhost",
  user: "root",
  password: "",
  database: "admin"
});
function startdb(){

  con.getConnection(function(err) {
    if (err){
        console.log("err connect db");
        startdb();

    }
    else{
    console.log("my sql Connected!");
    }
  });
  
}

startdb();

 
  //var sql = "INSERT INTO admin (name, password) VALUES ('mohamed@mohamed.com', '123456')";     con.query(sql, function (err, result) { if (err) throw err;  console.log("1 record inserted");   });
//__________________________________disconnect database_______________________________________________________//
function stopDB(){

    con.destroy((err)=>{
        if(err) throw err;
        console.log("mysql destroy")
    });
      
}







module.exports.con=con;


