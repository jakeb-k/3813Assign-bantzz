import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  name = sessionStorage.getItem('username'); 
  isSuper = false; 
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.checkSuperUser();
  }
  
  navhome() {
    sessionStorage.clear(); 

    this.router.navigate(['//']); 
  }
  checkSuperUser(){
    if(this.name == "superuser"){
      this.isSuper = true; 
      console.log(this.isSuper); 
    }
  }

}
