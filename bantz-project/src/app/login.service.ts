import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  sendData(jsonItems: any){
      return this.http.post('/api/login', jsonItems); 
  }
}
