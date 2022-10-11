import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    username = String("") ;  
    userpassword = String("");

    userDetails = {
      "name": "",
      "password": ""
    }
  

  

  constructor( private route:ActivatedRoute, private router:Router, private  http : HttpClient, private service: LoginService) { }

  ngOnInit(): void {
  }
 //checks that there is valid input when a user enters login details
  checkDetails(name, pass) {
    if(name != "" &&  pass != ""){
      return true;

    } else {
      alert("Please enter a username and password"); 
      return false; 
    }
  }
  //routes the account component
  navby() {
    this.router.navigate(['/account']); 
  }
  //sends the users details to the server to be checked if they are valid
  sendData(){
    if(this.checkDetails(this.username, this.userpassword) == true) {
        this.userDetails.name = this.username;
        this.userDetails.password = this.userpassword; 
        console.log(this.userDetails); 
        this.service.sendData(this.userDetails).subscribe((response: any) => {
        if(response == true){
          this.navby(); 
          localStorage.setItem('username', this.userDetails.name); 
        } else {
          alert("Enter valid username and password!"); 
        }
      }, (error)=>{
          console.log("Error is ", error)
      }); 
    }
  } 
}
