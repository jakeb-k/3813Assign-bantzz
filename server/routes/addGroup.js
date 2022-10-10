
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
        jsonReader('./data/groups.json', (err, data)=>{
        let groups = data; 
        let group = {
        "name":req.body.name,
        "users": req.body.users.split(","),
        "admins": req.body.admins.split(","),
        "assis": req.body.assis.split(",")
        }; 
        //console.log(data); 
        console.log(group);  
        console.log(groups);
        
        groups.push(group);

        
        if(err){
            console.log(err);
        } else {
            fs.writeFile('./data/groups.json', JSON.stringify(groups, null, 2), err => {
                if(err){
                    console.log(err);
                }
            });
            }
        });
        res.send(true);  
    }
};
