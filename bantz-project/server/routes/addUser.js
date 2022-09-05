var fs = require('fs');

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
        users = data; 
        users.push(user); 
        console.log(users); 
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
        res.send(true);  
    }
};

