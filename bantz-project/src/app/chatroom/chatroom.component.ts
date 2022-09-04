import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { MessageService } from '../message.service';


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

  constructor(private  http : HttpClient, private service: MessageService) { }

  ngOnInit(): void {
  }
  sendData(){
  this.fullMessage.name = sessionStorage.getItem('username')!;
  this.fullMessage.message = this.incoming;  
  console.log(this.fullMessage);
   var res = this.fullMessage; 
  this.service.sendData( this.fullMessage ).subscribe(res => {
   res = this.fullMessage; 
})}


}
