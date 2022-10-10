import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
  getUsers(){
    return this.http.get('/api/users'); 
  }
  makeUser(jsonItems: any){
    return this.http.post('/api/users', jsonItems); 
  }
  makeGroup(jsonItems:any){
    return this.http.post('/api/makeGroup', jsonItems); 
  }
  deleteUser(jsonItems: any){
    return this.http.post('/api/deleteUser', jsonItems); 
  }
}
