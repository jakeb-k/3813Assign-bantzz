import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
  //get request that returns all current users
  getUsers(){
    return this.http.get('/api/users'); 
  }
  //post request to add user and they password to the database
  makeUser(jsonItems: any){
    return this.http.post('/api/users', jsonItems); 
  }
  //post request to add new group and the relevant details to database
  makeGroup(jsonItems:any){
    return this.http.post('/api/makeGroup', jsonItems); 
  }
  //post request that sends the username that will be deleted
  deleteUser(jsonItems: any){
    return this.http.post('/api/deleteUser', jsonItems); 
  }
}
