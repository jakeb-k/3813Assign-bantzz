
//sends the incoming messages into the database to be stored 
//for future use
module.exports = function(db, app){

app.post('/api/message', function(req, res){
    console.log(req.body); 
    const collection = db.collection('messages'); 
    
    collection.insertOne(req.body,(err, dbres)=>{
        if (err) throw err;
        let num = dbres.insertedCount; 
        res.send({'num':num, err:null}); 
        console.log('message inserted'); 
    })
});
}