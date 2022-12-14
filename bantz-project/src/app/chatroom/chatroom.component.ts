import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { MessageService } from '../message.service';
import { NgModule } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  messagers={"msg": ""}; 

  username = localStorage.getItem('username'); 
  incoming = String("");
  fullMessage = {
    "name":"",
    "message": ""
  }
  messagecontent:string = ""; 
  messages:string[]=[]; 
  ioConnection:any; 
  messageArray:any = {};  
  oldMsgs:any []; 

  
  constructor(private service: MessageService, private socketService: SocketService) { }

  ngOnInit(): void {
    this.initIoConnection();
    this.getData();  

  }
  //used to init the connection to the socket
  //and update the messages sent from the chatroom into an 
  //an array of all the messages
  private initIoConnection(){
    const usedName = String(this.username); 
    this.socketService.initSocket(); 
     
    this.ioConnection = this.socketService.getMessage().subscribe((message:string)=>{
      this.messages.push(usedName + " : " + message);
      
    }); 
    
  }

  //used to update the chatroom with messages and send those messages
  //to the server
  public chat(){
    if(this.messagecontent){
      const usedName = String(this.username); 
      this.socketService.send(this.messagecontent);
      this.messagers.msg = usedName + " : "+ this.messagecontent;
      this.service.sendData(this.messagers).subscribe(res => {
      res = this.messagecontent; 
      }); 
      this.messagecontent = null; 
    }
    else{
      console.log("no message"); 
    }

  }
  //is called in the chat function but this is the code
  //responsible for sending the chat message to the server
  sendData(){
  
  this.fullMessage.name = localStorage.getItem('username')!;
  this.fullMessage.message = this.incoming;  
  
   var res = this.fullMessage; 
  this.service.sendData( this.fullMessage ).subscribe(res => {
   res = this.fullMessage; 
})
  this.getData(); 
}
//called after data is sent to update the new messages in the chat
//called on init of the component to load the previous messages
getData(){
  this.incoming = ""; 
  this.service.getMessages().subscribe(res => {
    console.log(res);  
    this.messageArray = res;
    this.oldMsgs = this.messageArray;  
  })
}

}
