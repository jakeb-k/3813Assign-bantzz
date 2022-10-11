//returns all group names that contain the current user
//in the users, admins or assis of that group
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