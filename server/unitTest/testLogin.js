//base logic of the login function without request extra stuff
//allows for testing 
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

