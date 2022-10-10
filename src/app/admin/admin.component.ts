import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username = String("");
  userpassword = String(""); 
  userDetails = {
      "name": "",
      "password": ""
    }
  users = {};
  userArray: any = []; 

  group = {
    "name": "",
    "users": "",
    "admins": "",
    "assis": ""
  }
  newUsers = String(""); 
  newAdmins = String("");
  newAssis = String(""); 
  groupName = String("");
  
  dUsername = String("");
  userDelete = {
    "dUser": ""
  }
  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.getData(); 
  }

  getData(){
  this.service.getUsers().subscribe(res => {
    this.users = res; 
    this.userArray = this.users; 
    console.log(this.userArray); 
  })
}
checkDetails() {
    if(this.username != "" && this.userpassword != ""){
      return true;

    } else {
      alert("Please enter a username and password"); 
      return false; 
    }
  }
sendData(){
    if(this.checkDetails() == true) {
        this.userDetails.name = this.username;
        this.userDetails.password = this.userpassword; 
        console.log(this.userDetails); 
        this.service.makeUser(this.userDetails).subscribe((response: any) => {
        if(response == true){
          alert("User "+ this.username+ " was created!"); 
          this.username = "";
          this.userpassword =""; 
        } else {
          alert("That username is taken"); 
          this.username = "";
          this.userpassword =""; 
        }
      }, (error)=>{
          console.log("Error is ", error)
      }); 
    }
  }

  makeGroup(){
    if(this.newUsers == ""){
      alert("Enter at least one user"); 
    } else {
      this.group.name = this.groupName; 
      this.group.users = this.newUsers; 
      this.group.admins = this.newAdmins;
      this.group.assis = this.newAssis; 
      console.log(this.group); 
      this.service.makeGroup(this.group).subscribe((response:any)=>{
        alert("Group: " + this.groupName + " has been made"); 
        this.newUsers = "";
        this.groupName = "";
        this.newAdmins = ""; 
        this.newAssis = "";  
      }); 
    }
  }
  deleteUser(){
    if(this.dUsername == ""){
      alert("Enter a user to be deleted!");  
    } else {
      this.userDelete.dUser = this.dUsername;
       this.service.deleteUser(this.userDelete).subscribe((response:any)=>{
        if(response == true){
          alert("User has been deleted");
          this.dUsername == "";
        } else {
          alert("User does not exist");
          this.dUsername == ""; 
        }
       });
    }
    
  }

}
