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


module.exports = function(db, app){

app.post('/api/groups',function(req, res){          
    var groupNames = [];
    var groupList = {
        "groupNames": []
    }
        const collection = db.collection('groups');
        collection.find({}).toArray((err,data)=>{
            var username = req.body.username; 
            for(i in data){ 
                if(data[i].users.includes(username)){
                    groupNames.push(data[i].name); 
                }
            }
             groupList.groupNames = groupNames; 
            res.send(groupList);
        }); 
       
    });
}