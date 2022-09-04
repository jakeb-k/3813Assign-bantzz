

const cors = require('cors');
var express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);



let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Chatroom Server is Live!");
    console.log("Listening on host " +host + "Port:" + port);
}); 

app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 
app.use(express.json())

app.use(express.static('C:/Users/jknow/OneDrive/Desktop/Year_4/TRI_2/3813ICT-Software_Frameworks/Assignment-1/chatRoom/bantz-project/dist/bantz-project'));



app.post('/api/login', require('./routes/login'));
app.post('/api/message', require('./routes/message')); 
app.get('/api/messages', require('./routes/getMessages')); 


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