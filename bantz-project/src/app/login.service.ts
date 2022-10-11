import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  //sends post request to server with the login details
  sendData(jsonItems: any){
      return this.http.post('/api/login', jsonItems); 
  }
}
