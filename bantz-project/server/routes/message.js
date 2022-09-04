var fs =  require('fs');
var userMessages = []; 
var msgCount =0; 

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
    msgCount += 1; 
	var userResponse = req.body;
    console.log(userResponse.name); 
    var userMessage = { msgNum: msgCount, 
                        name: userResponse.name,
                        message: userResponse.message};
    JSON.stringify(userMessage, null, 2)
    userMessages.push(userMessage); 
    console.log(userMessages); 
                

    jsonReader('./data/data.json', (err, data)=>{
    if(err){
        console.log(err);
    } else {
        fs.writeFile('./data/data.json', JSON.stringify(userMessages, null, 2), err => {
            if(err){
                console.log(err);
            }
        });
        }
    });
};