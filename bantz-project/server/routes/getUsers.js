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


module.exports = function(req, res){          

    jsonReader('./data/users.json', (err, data)=>{
    if(err){
        console.log(err);
    } else {
        res.send(data); 
        }
    });
};