//gets all current users and passwords and then checks for a match
//against the data sent
//if there is a match it will return true
//otherwise it returns false as the user is not in the database
module.exports = function(db, app){

app.post('/api/login',function(req,res){ 
        const collection = db.collection('users');
        collection.find({}).toArray((err,data)=>{ 
        for(i in data){
            if(req.body.name === data[i].name && req.body.password === data[i].password) {
                userExists = true; 
                break; 
            } else {
                userExists = false; 
            }
        }
        if(userExists === false) {
            res.send(false);
            } else {
               res.send(true); 
            }
    });
   
    if(!req.body) {
        console.log("is hitting server file"); 
        return res.sendStatus(400)
    } 
});
}