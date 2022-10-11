
//function that receives input from app and 
//formats it into arrays that allow for
//insertion into the database
//will return true once the details are formatted and submitted
module.exports =  function(db, app){

app.post('/api/makeGroup',function(req,res){
    if(req.body.name != ""){
        let group = {
        "name":req.body.name,
        "users": req.body.users.split(","),
        "admins": req.body.admins.split(","),
        "assis": req.body.assis.split(",")
        }; 
        const collection = db.collection('groups'); 
    
        collection.insertOne(group,(err, dbres)=>{
            if (err) throw err;
            let num = dbres.insertedCount; 
            res.send(true); 
            console.log('group inserted'); 
        });   
    }
});
}
