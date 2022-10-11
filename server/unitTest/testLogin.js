
module.exports = function (user, password) {
        if(user === "user" && password === "password") {
            userExists = true; 
                
        } else {
            userExists = false; 
        }
       
        if(userExists === false) {
            return false;
            } else {
            return true;
        }
}

