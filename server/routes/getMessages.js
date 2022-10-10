
module.exports = function(db, app){

    app.get('/api/messages', function(req, res){          

        const collection = db.collection('messages');
        collection.find({}).toArray((err,data)=>{
            res.send(data); 
        }); 
    });
}