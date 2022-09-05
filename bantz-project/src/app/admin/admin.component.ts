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
          alert("enter valid details"); 
        }
      }, (error)=>{
          console.log("Error is ", error)
      }); 
    }
  }
}
