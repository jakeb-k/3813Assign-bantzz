

const cors = require('cors');
var express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);



let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Bantz Server is Live!");
    console.log("Listening on Port:" + port);
}); 

app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 
app.use(express.json())

app.use(express.static('C:/Users/jknow/OneDrive/Desktop/Year_4/TRI_2/3813ICT-Software_Frameworks/Assignment-1/chatRoom/bantz-project/dist/bantz-project'));



app.post('/api/login', require('./routes/login'));
app.post('/api/message', require('./routes/message')); 
app.get('/api/messages', require('./routes/getMessages')); 
app.get('/api/users', require('./routes/getUsers')); 
app.post('/api/deleteUser', require('./routes/deleteUser'));
app.post('/api/users', require('./routes/addUser')); 
app.post('/api/makeGroup', require('./routes/addGroup')); 
app.post('/api/groups', require('./routes/getGroup')); 