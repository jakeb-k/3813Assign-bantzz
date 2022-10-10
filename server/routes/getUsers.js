var fs =  require('fs'); 

function jsonReader(filePath, cb){
    fs.readFile(filePath, 'utf-8', (err, fileData)=>{
        if(err){
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch(err){
            return cb && cb(err); 
        }
    });
}



module.exports = function(db, app){

    app.get('/api/users', function(req, res){          

        const collection = db.collection('users');
        collection.find({}).toArray((err,data)=>{
            res.send(data); 
        }); 
    });
}