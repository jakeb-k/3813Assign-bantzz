import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  name = sessionStorage.getItem('username'); 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navhome() {
    sessionStorage.clear(); 

    this.router.navigate(['//']); 
  }

}
