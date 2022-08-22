import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  
  incoming = String("");
  fullMessage = {
    name:"user",
    message: this.incoming,
    
    
  }

  constructor(private  http : HttpClient) { }

  ngOnInit(): void {
  }
  sendData(){
    console.log(this.fullMessage);
   var res = this.fullMessage; 
  this.http.post('/api/chatroom', this.fullMessage ).subscribe(res => {
   res = this.fullMessage; 
})}


}
