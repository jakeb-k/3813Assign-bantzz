
var fs = require('fs');
let userExists = false; 
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

module.exports =  function(req,res){
        fs.readFile('./data/users.json', function(err, data){
        if (err) throw err;
        let userArray = JSON.parse(data);
        //console.log(userArray); 
    });
    console.log(req.body); 
        jsonReader('./data/users.json', (err, data)=>{
        for(i in data){
            if(req.body.name === data[i].name && req.body.password === data[i].password) {
                console.log(data[i].name + data[i].password); 
                userExists = true; 
                break; 
            } else {
                userExists = false; 
            }
        }console.log(userExists); 
        if(userExists === false) {
            res.send(false);
            } else {
               res.send(true); 
            }
    }
    );
   
    if(!req.body) {
        console.log("is hitting server file"); 
        return res.sendStatus(400)
    } 
    
    //console.log(userDetails)
};