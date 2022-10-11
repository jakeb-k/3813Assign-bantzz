//base logic of deleteUser function without the request stuff
//allows for testing of the function
module.exports = function (dUser, list) {
        if(list.includes(dUser)){
            return true;
        } else {
            return false;
        }
}


