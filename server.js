
var express = require('express');
const { jsonReader } = require('./app');
var app = express();
var http = require('http').Server(app);


app.use(express.urlencoded({extended : true}));


 
app.use(express.static(__dirname + '/www'));



let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Chatroom Server is Live!");
    console.log("Listening on host " +host + "Port:" + port);
}); 

app.get('/chatroom', function (req, res) {
    
res.sendFile(__dirname + '/www/chatroom.html');

});



app.post('/chatroom', function(req, res){

	global.userMessage = req.body;
    console.log(userMessage);
    res.sendFile(__dirname + '/www/chatroom.html');

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