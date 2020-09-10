//________________________________control home module and routing______________________________//
const Chome = require("../controler/CRhome");
const route = require("express").Router();
const { exec } = require("child_process");
const sensor = require("ds18x20");
const { spawn } = require('child_process');

//_____________________________________________________________________________________________//

//_______________________________________route home page_______________________________________//
route.get("/", Chome.Chome);
//_____________________________________________________________________________________________//

///////////////////////////////////////////////////////////
///////            control leds          ///////////////
/////////////////////////////////////////////////////////

/////   led1 ///////
route.post("/ledcon1", function (req, res, next) {
  /////  1  //////
  if (req.body.led1 == undefined) {
    exec("python /bin/lightOff.py", (err, stdout, stderr) => {
      if (err) {
        console.log("err led 1 turn off");
        res.json("err led 1 turn off");
      } else {
        res.json("led1 turned off");
        console.log("led1 turned off");
      }
    });
  } else {
    exec("python /bin/lightOn.py", (err, stdout, stderr) => {
      if (err) {
        console.log("err led 1 on ");
        res.json("err led 1 turn on");

      } else {
        console.log("its", stdout);

        res.json("led1 turned on");
        console.log("led1 turned on");
      }
    });
  }
});

/////   led2 ///////
route.post("/ledcon2", function (req, res, next) {
  /////  2  //////
  if (req.body.led2 == undefined) {
    exec("python /bin/lightOff1.py", (err, stdout, stderr) => {
      if (err) {
        console.log("err led 2 turn off");
        res.json("err led 2 turn off");

      } else {
        res.json("led2 turned off");
        console.log("led2 turned off");
      }
    });
  } else {
    exec("python /bin/lightOn1.py", (err, stdout, stderr) => {
      if (err) {
        console.log("err led 2 on ");
        res.json("err led 2 turn on");

      } else {
        console.log("its", stdout);

        res.json("led2 turned on");
        console.log("led2 turned on");
      }
    });
  }
});

/////   led3 ///////
route.post("/ledcon3", function (req, res, next) {
  /////  3  //////
  if (req.body.led3 == undefined) {
    exec("python /bin/lightOff2.py", (err, stdout, stderr) => {
      if (err) {
         console.log("err led 3 off ");
         res.json("err led 3 turn off");

       }
       else{ 
      res.json("led3 turned off");
      console.log("led3 turned off");
       }
    });
  } else {
    exec("python /bin/lightOn2.py", (err, stdout, stderr) => {
      if (err) {
         console.log("err led 3 on ");
         res.json("err led 3 turn on");

       } 
       else{
      console.log("its", stdout);

      res.json("led3 turned on");
      console.log("led3 turned on");
       }
    });
  }
});

/////   led4 ///////
route.post("/ledcon4", function (req, res, next) {
  /////  4  //////
  if (req.body.led4 == undefined) {
    exec("python /bin/lightOff3.py", (err, stdout, stderr) => {
      if (err) {
         console.log("err led 4 off ");
         res.json("err led 4 turn off");

       } 
       else{
      res.json("led4 turned off");
      console.log("led4 turned off");
       }
    });
  } else {
    exec("python /bin/lightOn3.py", (err, stdout, stderr) => {
      if (err) {
         console.log("err led 4 on ");
         res.json("err led 4 turn on");

       } 
       else{
      console.log("its", stdout);

      res.json("led4 turned on");
      console.log("led4 turned on");
       }
    });
  }
});

//////////////////////////////////////////////////
/////////////   control door   ////////////////////
///////////////////////////////////////////////////

route.post("/door", function (req, res, next) {
  if (req.body.valuedoor == "close") {
    exec("python /bin/close.py", (err, stdout, stderr) => {
      if (err) {
         console.log("err close door");
         res.json("err close door");

       } 
else{
      console.log("its", stdout);

      res.json("door is closed");
      console.log("door is closed");
}
    });
  } else {

    exec("python /bin/open.py", (err, stdout, stderr) => {
      if (err) {
         console.log("err open door");
         res.json("err open door");

       } 
       else{


         console.log("its", stdout);

         res.json("door is opened");
         console.log("door is opened");

       }

    });
  }
});

//////////////////////////////////////////////////
/////////////   control pump   ////////////////////
///////////////////////////////////////////////////

route.post("/pump", function (req, res, next) {
  if (req.body.pumpo < 5) {
    res.json("5 secs is too low");
    console.log("5 secs is too low");
  } else {
 

        exec("python /bin/relay.py " + req.body.pumpo,(err, stdout, stderr) => {
         if (err) {
            console.log("err pump");
            res.json("err pump");

          }   
          else{
            setTimeout(function () {
         console.log("its", stdout);
            res.json("pump is opened");
            console.log("pump is opened", req.body.pumpo);
          },req.body.pumpo);
         }
    });
  }
});

//////////////////////////////////////////////////
/////////////   control temp   ////////////////////
///////////////////////////////////////////////////

route.post("/temp", function (req, res, next) {
  var sensorId = "28-00000a55be37";
  sensor.get(sensorId, (err, temp) => {
    if (err) {
      console.log("temp err");
      res.json("temp err");
    } else {
      res.json(temp);
    }
  });
});

// ////// flame detector

/////   flame  ///////
route.post("/flamet", function (req, res, next) {
  /////  flame  //////
    exec("bash /bin/x.sh", (err, stdout, stderr) => {
      if (err) {

      } 
      
      else {
        // res.json("flame turned on");
        // console.log("flame turned on");
      }

    });
    res.json("flame turned on");
    console.log("flame turned on");

});


///// flame off 

route.post("/flamef", function (req, res, next) {

  exec("pkill bash && pkill python3", (err, stdout, stderr) => {
    if (err) {
      console.log("err flame off ");
      res.json("err flame off");

    } else {
      res.json("flame turned off");
      console.log("flame turned off");
    }
  });

});

// /////   flame  ///////
// route.post("/flame", function (req, res, next) {
//    if (req.body.sta == true) {
//       try {
//          function runScript(){
//             return spawn('python', ['flame.py']);
//          }
//          const subprocess = runScript()
//          res.json('runing now')
//          // print output of script
//          subprocess.stdout.on('data', (data) => {
//             console.log(`data:${data}`);
//          });
//          subprocess.stderr.on('data', (data) => {
            
//             console.log(`error:${data}`);
//          });
//          subprocess.stderr.on('close', () => {
//             console.log("Closed");
//          });
         
//       } catch (error) {
//          res.json("err flame on")
//       }

//    }
//    else{

//       try {
         
//          subprocess.kill('SIGTERM');
//          res.json("flame turned off");
   
//       } catch (error) {
//          res.json("err flame off")
         
//       }


//    }

// });

//////////////////////////////////////////////////////////////////////////////////
//////////////////// music  /////////////////////////////////
//////////////////////////////////////////////////////////////

/////   next  ///////
route.post("/ionext", function (req, res, next) {
  exec("mpc next", (err, stdout, stderr) => {
    if (err || stderr) { console.error(`exec error: first next`);

      if (stdout == "") {
        exec("mpc play", (err, stdout, stderr) => {
          if (err) { console.log("err play on next"); } 
          else {
            res.json("play on next");
            console.log("play on next");
          }
        });
      }
    } else {
      res.json("next");
      console.log("next");
    }
  });
});

/////   iopause  ///////
route.post("/iopause", function (req, res, next) {
  exec("mpc status", (err, stdout, stderr) => {
   if (err || stderr) {
      console.log("error mpd pause");
      if (stdout[6] == ":") {

         exec("mpc play", (err, stdout, stderr) => {
            if (err) { console.log("err play on pause"); } 
            else {
              res.json("play on pause");
              console.log("play on pause");
            }
          });

      }
   
   }

    else {
      exec("mpc pause", (err, stdout, stderr) => {
         if (err) { console.log("err pause"); } 
         else {
           res.json(" pause");
           console.log("pause");
         }
       });

    }
  });
});


/////   ioprev  ///////
route.post("/ioprev", function (req, res, next) {
  exec("mpc prev", (err, stdout, stderr) => {
    if (err || stderr) {
      console.error('err prev');
      if (stdout == "") {


         exec("mpc play", (err, stdout, stderr) => {
            if (err) { console.log("err play on prev"); } 
            else {
              res.json("play on prev");
              console.log("play on prev");
            }
          });


      }


    }

  });
});

module.exports = route;
