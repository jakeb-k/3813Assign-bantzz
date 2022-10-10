var fs =  require('fs'); 

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


module.exports = function(req, res){          
    groupNames = [];
    groupList = {
        "groupNames": []
    }
    jsonReader('./data/groups.json', (err, data)=>{
    if(err){
        console.log(err);
    } else {
        username = req.body.username; 
        for(i in data){ 
            if(data[i].users.includes(username)){
                //console.log(data[i].users)
                groupNames.push(data[i].name); 
                
            }
        }
        console.log(groupNames);
        groupList.groupNames = groupNames; 
        res.send(groupList); 
        }
    });
};