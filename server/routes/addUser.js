
//is called when a new user is being inserted into the database
module.exports = function(db, app) {

app.post('/api/users', function(req,res){
    if(req.body.name != ""){
        user = req.body; 
        
        const collection = db.collection('users'); 
    
        collection.insertOne(user,(err, dbres)=>{
            if (err) throw err;
            let num = dbres.insertedCount; 
            res.send(true); 
            console.log('user inserted'); 
        }); 
    }
});
}

