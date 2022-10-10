

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
