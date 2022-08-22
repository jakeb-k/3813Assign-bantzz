import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    useremail = String("") ;  
    userpassword = String("");
  
  



  constructor( private route:ActivatedRoute, private router:Router, private  http : HttpClient) { }

  ngOnInit(): void {
  }
 
  checkDetails() {
    if(this.useremail != "" && this.userpassword != ""){
      this.navby(); 
    } else {
      alert("Please enter a username and password"); 
    }
    return true; 
  }
  navby() {
    this.router.navigate(['/chatroom']); 
  }

  sendData(){
  this.http.get('/api/chatroom').subscribe((response: any) => {
   console.log('response is ', response);
  }
)}
}
