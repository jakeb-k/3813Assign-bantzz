import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from './group.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  name = localStorage.getItem('username'); 
  isSuper = false; 
  groupNames = []; 
  currentName = String(""); 
  constructor(private router: Router, private service: GroupService) { }
  
  ngOnInit(): void {
    this.checkSuperUser();
    this.getGroups(); 
  }
  
  //function used to send user back to login 
  navhome() {
    localStorage.clear(); 

    this.router.navigate(['//']); 
  }
  //used to check if the user is the superuser
  checkSuperUser(){
    if(this.name == "superuser"){
      this.isSuper = true; 
      console.log(this.isSuper); 
    }
  }
  //used to get all the group names the current user is in
  getGroups(){
    this.service.getGroupData().subscribe((response:any)=>{
        this.groupNames = response.groupNames;
        console.log(this.groupNames);  
        //console.log(this.groupNames); 
      }); 
  }
  //settings the groupname that is clicked into local storage
  setGroupName(){
    
    localStorage.setItem('group',this.currentName );
    console.log(this.currentName); 
  }

}
