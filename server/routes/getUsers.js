//returns all users in the database as an array
module.exports = function(db, app){

    app.get('/api/users', function(req, res){          

        const collection = db.collection('users');
        collection.find({}).toArray((err,data)=>{
            res.send(data); 
        }); 
    });
}