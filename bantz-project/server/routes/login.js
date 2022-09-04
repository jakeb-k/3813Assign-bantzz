var fs = require('fs');

module.exports =  function(req,res){
    console.log(req.body);
        /*fs.readFile('./data/users.json', function(err, data){
        if (err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray); 
    });*/ 
    if(req.body.name != ""){
        uArray = []; 
        uArray.push(req.body); 
        data = JSON.stringify(uArray); 
        fs.writeFile('./data/users.json', data, function(err) {
        if(err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray); 
        res.send(true); 
    }); 
       
    }else {
        alert("Enter a username to login"); 
    }
   
    if(!req.body) {
        console.log("is hitting server file"); 
        return res.sendStatus(400)
    } 
    
    //console.log(userDetails)
};