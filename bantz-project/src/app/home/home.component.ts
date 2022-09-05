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
 
  checkDetails() {
    if(this.username != "" && this.userpassword != ""){
      return true;

    } else {
      alert("Please enter a username and password"); 
      return false; 
    }
  }
  navby() {
    this.router.navigate(['/account']); 
  }

  sendData(){
    if(this.checkDetails() == true) {
        this.userDetails.name = this.username;
        this.userDetails.password = this.userpassword; 
        console.log(this.userDetails); 
        this.service.sendData(this.userDetails).subscribe((response: any) => {
        if(response == true){
          this.navby(); 
          sessionStorage.setItem('username', this.userDetails.name); 
        }
      }, (error)=>{
          console.log("Error is ", error)
      }); 
    }
  } 
}
