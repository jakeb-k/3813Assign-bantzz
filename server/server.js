//server file that inits all required modules within it

const cors = require('cors');
var express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
const MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017'; 

const io = require('socket.io')(http,{
    cors: {
        origin: "http://localhost:4200",
        methods:["GET", "POST"]
    }   
});

const sockets = require('./socket.js'); 

const PORT = 3000; 


app.use(cors()); 
sockets.connect(io, PORT); 

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Bantz Server is Live!");
    console.log("Listening on Port:" + port);
}); 

app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 
app.use(express.json()); 


//call of static build file that links the angular app to the server
app.use(express.static('C:/Users/jknow/OneDrive/Desktop/Year_4/TRI_2/3813ICT-Software_Frameworks/Assignment-1/chatRoom/bantz-project/dist/bantz-project'));

//mongodb client is called here with the routes used
MongoClient.connect(url, function(err, client){
    if(err) {return console.log(err)}
    const dbName = 'bantzdb';
    const db = client.db(dbName); 
    require("./routes/getMessages.js")(db,app);     
    require("./routes/message.js")(db,app);
    require("./routes/addUser.js")(db, app); 
    require('./routes/getUsers')(db,app)
    require('./routes/login')(db, app);
    require('./routes/deleteUser')(db,app);  
    require('./routes/addGroup')(db, app);  
    require('./routes/getGroup')(db,app);   

}); 

