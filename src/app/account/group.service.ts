import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  
  constructor(private http: HttpClient) { }

  getGroupData(){
    var username = localStorage.getItem('username');
    var nameSend = {
    "username":username 
  }
    return this.http.post('/api/groups', nameSend)
  }
}
