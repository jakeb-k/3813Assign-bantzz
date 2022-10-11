import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket; 

  constructor() { }
  //function used to tell socket what server the app is on
  initSocket(){
    this.socket = io(SERVER_URL);
    return()=>{this.socket.disconnect();}
  }
  //responsible for the real-time update of chatlog
  //so multiple users can type messages
  send(message:string){
    this.socket.emit('message', message); 
  }
  //gets messages from current session to be returned into message array
  getMessage(){
    return new Observable(observer=>{
      this.socket.on('message', (data)=>{observer.next(data)
      }); 
    });
  }
}
