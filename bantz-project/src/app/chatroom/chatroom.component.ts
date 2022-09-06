import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { MessageService } from '../message.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  username = sessionStorage.getItem('username'); 
  incoming = String("");
  fullMessage = {
    "name":"",
    "message": ""
  }
  messages = {}; 
  messageArray: any = []; 
  
  constructor(private  http : HttpClient, private service: MessageService) { }

  ngOnInit(): void {
    this.getData(); 
  }
  sendData(){
  this.fullMessage.name = sessionStorage.getItem('username')!;
  this.fullMessage.message = this.incoming;  
  
   var res = this.fullMessage; 
  this.service.sendData( this.fullMessage ).subscribe(res => {
   res = this.fullMessage; 
})
  this.getData(); 
}
getData(){
  this.incoming = ""; 
  this.service.getMessages().subscribe(res => {
    this.messages = res; 
    this.messageArray = this.messages; 
  })
}

}
