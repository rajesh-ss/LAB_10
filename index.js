
/**
 * reading the Json File
 */

let dataobbj = {};

 const rd = require("fs");


 // read the file
function readjs(filePath, cb) {

/**
 * 1st Argument is file path
 * 2nd one is file encoding 
 * 3rd one is call back function
 */
  rd.readFile(filePath, (err, data) => {
    if (err) {
      return cb && cb(err);
    }
    try {

      const obb = JSON.parse(data);
      return cb && cb(null, obb);

    } catch (err) {
      return cb && cb(err);
    }
  });
}

// call the function to read the file

readjs("./eg.json", (err, myobb) => {
  if (err) {
    console.log(err);
    return;
  }
  dataobbj = myobb;
  //console.log(myobb.brand); 
});


/***
 * update the json file change the brand to "abc"
 */
function updater(filePath){

        // increase customer order count by 1
        dataobbj.price += 100000;
        rd.writeFile(filePath, JSON.stringify(dataobbj), err => {
          if (err) console.log("Error writing file:", err);
        });
}

updater("./eg.json");

/**
 * express JS 
 */

/**
 * creating a local server using express js
 */

let tab = `</hr><table>
<tr>
<th>brand</th>
<th>type</th>
<th>model</th>
<th>price</th>
</tr>
</tr></table>`

// Require express and create an instance of it
var express = require('express');
var app = express();

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('Landing page');
});

// On localhost:3000/welcome
app.get('/usedVeh', function (req, res) {
    res.send('Used Vehicle Dealer, details of veh -'
    +'<tr><td>'+dataobbj.brand+'</td></tr>'+
    +'<tr><td>'+dataobbj.type+'</td></tr>'+
    +'<tr><td>'+dataobbj.model+'</td></tr>'+
    +'<tr><td>'+dataobbj.price+'</td></tr>'
    );
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});




/*

const rdd = require('fs');

rdd.readFile('./eg.json', 'utf-8', (err, data)=>{
    //console.log(data);
    if(err){
        console.log(err);
    }
    else{
        // The "data" that is receiveed is string- convert that to js object
        try{
            const obdata = JSON.parse(data);
            console.log(obdata.price);
        }
        catch(err){
            console.log("error when parsing the json file\n"+err);
        }

    }
}); */



