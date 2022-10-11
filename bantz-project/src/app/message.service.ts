import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  //sends post request to server with each message entered
  sendData(jsonItems: any){
      return this.http.post('/api/message', jsonItems); 
  }
  //gets all  the messages that are currently in the database
  getMessages(){
    return this.http.get('/api/messages'); 
  }
}
