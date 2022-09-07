import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from './group.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  name = sessionStorage.getItem('username'); 
  isSuper = false; 
  groupNames = []; 
  currentName = String(""); 
  constructor(private router: Router, private service: GroupService) { }
  
  ngOnInit(): void {
    this.checkSuperUser();
    this.getGroups(); 
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
  getGroups(){
    this.service.getGroupData().subscribe((response:any)=>{
        this.groupNames = response.groupNames;
        console.log(this.groupNames);  
        //console.log(this.groupNames); 
      }); 
  }
  setGroupName(){
    
    sessionStorage.setItem('group',this.currentName );
    console.log(this.currentName); 
  }

}
