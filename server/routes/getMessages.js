//gets all messages from the database and sends them back to
//the app as an array
module.exports = function(db, app){

    app.get('/api/messages', function(req, res){          

        const collection = db.collection('messages');
        collection.find({}).toArray((err,data)=>{
            res.send(data); 
        }); 
    });
}