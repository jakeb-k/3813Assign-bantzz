var fs = require('fs');

userExists = false; 

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
    if(req.body.name != ""){
        jsonReader('./data/users.json', (err, data)=>{
        user = req.body;
        console.log(user);  
        users = data;
        for(i in data){
            if(req.body.dUser === data[i].name) {
                console.log(data[i].name);
                userExists = true; 
                data.splice(i,1);  
                break; 
            } else {
                userExists = false; 
            }
        }
        if(userExists == true){
            //users.push(user);
            res.send(true);  
        } else {
            res.send(false);
        }
          
        
        if(err){
            console.log(err);
        } else {
            fs.writeFile('./data/users.json', JSON.stringify(users, null, 2), err => {
                if(err){
                    console.log(err);
                }
            });
            }
        });
        
    }
};

