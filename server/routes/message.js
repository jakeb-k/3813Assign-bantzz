
var userMessages = []; 
var msgCount;

module.exports = function(db, app){

app.post('/api/message', function(req, res){
    
	var userResponse = req.body; 
    var userMessage = { msgNum: msgCount, 
                        name: userResponse.name,
                        message: userResponse.message};
    
    const collection = db.collection('messages'); 
    
    collection.insertOne(userMessage,(err, dbres)=>{
        if (err) throw err;
        let num = dbres.insertedCount; 
        res.send({'num':num, err:null}); 
        console.log('message inserted'); 
    })
    /*console.log(userMessages); 
    userMessages = data; 
    dataCount = collect(data)
    msgCount = dataCount.count();  
    userMessages.push(userMessage);
    
    console.log(userMessages);


    /*jsonReader('./data/data.json', (err, data)=>{
     
    if(err){
        console.log(err);
    } else {
        fs.writeFile('./data/data.json', JSON.stringify(userMessages, null, 2), err => {
            if(err){
                console.log(err);
            }
        });
        }
    });*/ 
});
}