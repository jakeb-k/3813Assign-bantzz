let assert = require('assert');
let app = require('../testServer.js');
let http = require('http'); 
let chai = require('chai'); 
let chaiHttp = require('chai-http');
let should = chai.should(); 
chai.use(chaiHttp); 

//contains all the route testing functions
describe('Server Test', function(){
    before(function(){
        console.log("before test");
    });


    after(function(){
        console.log("after test"); 
    });
    //route testing for when new user details are sent
    describe('/api/users',()=>{
        it('it should send user details for creation', (done)=>{
            chai.request(app).post('/api/users').type('form').send({name:"user1", password:"t"}).end((err, res)=>{
                res.should.have.status(200);
                res.body.should.have.property('name');
                res.body.should.have.property('password');  
                console.log(res.body); 
            });
            done(); 
        });
    });
    //route testing for when user details are sent for checking
    describe('/api/login',()=>{
        it('it should send user details for checking', (done)=>{
            chai.request(app).post('/api/login').type('form').send({name:"user1", password:"t"}).end((err, res)=>{
                res.should.have.status(200);
                res.body.should.have.property('name');
                res.body.should.have.property('password');  
            });
            done(); 
        });
    });
    //route testing for when a username is sent for deletion
    describe('/api/deleteUser',()=>{
        it('it should send username for deletion', (done)=>{
            chai.request(app).post('/api/deleteUser').type('form').send({name:"user1"}).end((err, res)=>{
                res.should.have.status(200);
                res.body.should.have.property('name');  
            });
            done(); 
        });
    });
    //route testing for when groups a user is in is returned
    describe('/api/groups',()=>{
        it('it should send username to check what groups its in', (done)=>{
            chai.request(app).post('/api/groups').type('form').send({name:"user1"}).end((err, res)=>{
                res.should.have.status(200);
                res.body.should.have.property('name');  
            });
            done(); 
        });
    });
    //route testing to see that message will be sent
    describe('/api/message',()=>{
        it('it should send message to be saved', (done)=>{
            chai.request(app).post('/api/message').type('form').send({msg: "superuser: new message"}).end((err, res)=>{
                res.should.have.status(200);
                res.body.should.have.property('msg');
            });
            done(); 
        });
    });
    //route testing for when new group details are entered to be created
    describe('/api/makeGroup',()=>{
        it('it should send group details to be created', (done)=>{
            chai.request(app).post('/api/makeGroup').type('form').send({name: "testGroup", users:"[user1, user2]", admins:"[admin1]", assis:"[assis1, assis2]"}).end((err, res)=>{
                res.should.have.status(200);
                res.body.should.have.property('name');
                res.body.should.have.property('users'); 
                res.body.should.have.property('admins'); 
                res.body.should.have.property('assis'); 
            });
            done(); 
        });
    });
    //route testing for getting all previous session messages
    describe('/api/messages', () => {
        it('it should GET all messages', (done)=>{
            chai.request(app).get('/api/messages').end((err, res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array'); 
            });
            done(); 
        });
    });
    //route testing for getting all users in the database
    describe('/api/users', () => {
        it('it should GET all users', (done)=>{
            chai.request(app).get('/api/users').end((err, res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array'); 
            });
            done(); 
        });
    });

});


