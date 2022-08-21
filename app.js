const fs = require('fs');

// fs.readFile('./data.json', 'utf-8', (err, jsonString) =>{
//     if(err) {
//         console.log(err);
//     } else {
//         try {
//             const data = JSON.parse(jsonString);
//             console.log(data.user);
//         } catch {
//             console.log('Error parsing JSON', err); 
//         }
//     } 
// });

const userMessage ={
    name: "",
    message: ""
}


const newObject = {
    user: 'JakeyNoLs2',
    message: 'testing sending data into JSON file'
}; 

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



jsonReader('./data.json', (err, data)=>{
    if(err){
        console.log(err);
    } else {
        data.userNo +=1; 
        fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
            if(err){
                console.log(err);
            }
        });
    }
}); 

