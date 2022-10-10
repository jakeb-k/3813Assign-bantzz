import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  sendData(jsonItems: any){
      return this.http.post('/api/message', jsonItems); 
  }
  getMessages(){
    return this.http.get('/api/messages'); 
  }
}
