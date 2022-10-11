//base logic of the getGroup function that allows for testing 
module.exports = function(name, list){
        if(list.includes(name)){
            return true;
        } else {
            return false;
        }
}

