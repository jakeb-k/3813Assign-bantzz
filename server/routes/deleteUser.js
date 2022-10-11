//called when the app requests a user to be deleted
//checks that there is valid input before 
//finding that instance in the database and deleting it
module.exports =  function(db,app){

    app.post('/api/deleteUser', function(req, res) {
    if(req.body.name != ""){
        dUser = req.body.dUser; 
        console.log(dUser); 
         const collection = db.collection('users');
            collection.deleteOne({name:dUser}, (err, docs)=>{
                collection.find({}).toArray((err,data)=>{ 
                    console.log(data); 
                    res.send(true); 
            });
        
        });
    }
});
} 

