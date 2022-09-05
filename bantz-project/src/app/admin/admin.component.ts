import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
}
