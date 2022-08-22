

const cors = require('cors');
var express = require('express');
const fs = require('fs');

var app = express();
var http = require('http').Server(app);
var userMessages = []; 
var msgCount =0; 

app.use(express.urlencoded({extended : true}));

app.use(cors()); 
 
app.use(express.static(__dirname + '/bantz-project/dist/bantz-project'));



let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Chatroom Server is Live!");
    console.log("Listening on host " +host + "Port:" + port);
}); 

// app.get('localhost:3000/chatroom', function (req, res) {
    
// res.sendFile(__dirname + '/bantz-project/dist/bantz-project');

// });

function jsonReader(filePath, cb){
    fs.readFile(filePath, 'utf-8', (err, fileData)=>{
        if(err){
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch(err){
            return cb && cb(err); 
        }
    });
}




app.post('/api/chatroom', function(req, res){
    msgCount += 1; 
	var userResponse = req;
    console.log(userResponse.name); 
    var userMessage = { msgNum: msgCount, 
                        name: userResponse.name,
                        message: userResponse.message};
    JSON.stringify(userMessage, null, 2)
    userMessages.push(userMessage); 
    console.log(userMessages); 
                

    jsonReader('./data.json', (err, data)=>{
    if(err){
        console.log(err);
    } else {
        fs.writeFile('./data.json', JSON.stringify(userMessages, null, 2), err => {
            if(err){
                console.log(err);
            }
        });
        }
    });
});


/*
app.post('/chatroom', function(req,res){
    if (!req.body){
        console.log('body is empty'); 
        return res.sendStatus(400);
    }
    var user = {}
    user.name = req.body.name;
    user.message = req.body.message;
    console.log(user); 
    jsonReader('./data.json', (err, data)=>{
    if(err){
        console.log(err);
    } else {
        fs.appendFile('./data.json', JSON.stringify(user, null, 2), err => {
            if(err){
                console.log(err);
            }
        });
        }
    }); 
});*/ 