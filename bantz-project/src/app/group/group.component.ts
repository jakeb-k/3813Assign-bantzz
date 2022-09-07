import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  username = sessionStorage.getItem('username'); 
  currentGroup = sessionStorage.getItem('group'); 
  constructor() { }

  ngOnInit(): void {
  }

}
