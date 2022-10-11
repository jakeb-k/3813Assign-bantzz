var asset = require('assert');
var login = require('./testLogin.js'); 
var group = require('./testGetGroup.js'); 
var dUser = require('./testDelete.js'); 
let chai = require('chai'); 

//contains all unit tests for route functions

describe('Unit Testing for login function', ()=>{
    //checks that false will return if user is not matching
    describe('Test Case 1 for #login', ()=> {
        it('should return false when the username is not matching', ()=> {
            asset.equal(login("notmatching", "password"), false); 
        })
    });
    //checks that false will return if password is not matching
    describe('Test Case 2 for #login', ()=> {
        it('should return false when the password is not matching', ()=> {
            asset.equal(login("user", "notmatching"), false); 
        })
    });
    //checks that false will return when input is numeric
    describe('Test Case 3 for #login', ()=> {
        it('should return false when the inputs are numeric', ()=> {
            asset.equal(login(0, 0), false); 
        })
    });
    describe('Test Case 4 for #login', ()=> {
        it('should return true when the username and password are matching', ()=> {
            asset.equal(login("user", "password"), true); 
        })
    });
}); 
describe('Unit Testing for getGroup function', ()=>{
    describe('Test Case 1 for #group', ()=> {
        it('should return false when the user is not in list', ()=> {
            asset.equal(group("user", ["a","b","c","d"]), false); 
        })
    });
    describe('Test Case 2 for #group', ()=> {
        it('should return true when the user is in the list', ()=> {
            asset.equal(group("user", ["a","b","c","d","user"]), true); 
        })
    });
}); 
describe('Unit Testing for deleteUser function', ()=>{
    describe('Test Case 1 for #delete', ()=> {
        it('should return false when the user is not in list', ()=> {
            asset.equal(dUser("user", ["a","b","c","d"]), false); 
        })
    });
    describe('Test Case 2 for #delete', ()=> {
        it('should return true when the user is in the list', ()=> {
            asset.equal(dUser("user", ["a","b","c","d","user"]), true); 
        })
    });
}); 