

module.exports = function(db, app) {

app.post('/api/users', function(req,res){
    if(req.body.name != ""){
        //jsonReader('./data/users.json', (err, data)=>{
        user = req.body; 
        //users = data;
        const collection = db.collection('users'); 
    
        collection.insertOne(user,(err, dbres)=>{
            if (err) throw err;
            let num = dbres.insertedCount; 
            res.send({'num':num, err:null}); 
            console.log('user inserted'); 
        }); 
        /* for(i in data){
            if(req.body.name === data[i].name) {
                console.log(data[i].name); 
                alreadyUsed = true; 
                break; 
            } else {
                alreadyUsed = false; 
            }
        }
        if(alreadyUsed == false){
            users.push(user);
            res.send(true);  
        } else {
            res.send(false);
        }
         
        
        if(err){
            console.log(err);
        } else {
            fs.writeFile('./data/users.json', JSON.stringify(users, null, 2), err => {
                if(err){
                    console.log(err);
                }
            });
            }
        });
        */ 
    }
});
}

