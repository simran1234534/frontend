import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {User} from '../app/user'
@Injectable({
  providedIn: 'root'
})

export class UserService {
  selectedUser : User = {
    //  userId:0,
    
    name: '',

   
    email: '',
    password: ''
  };
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http:HttpClient) {
   
   }


    getdata(){
      return this.http.get("http://127.0.0.1:4003/getdata",
      )
    }
    getbanklist(){
      return this.http.get("http://127.0.0.1:4003/bankdata",
      ) 
    }
   
setToken(token: string) {
  localStorage.setItem('token', token);
}

getToken() {
  return localStorage.getItem('token');
}
postUser(user: User){
  return this.http.post('http://127.0.0.1:4003/register',user,this.noAuthHeader);
}
login(authCredentials) {
  return this.http.post('http://127.0.0.1:4003/authenticate',authCredentials,this.noAuthHeader);
}
getUserPayload() {
  var token = this.getToken();
  if (token) {
    var userPayload = atob(token.split('.')[1]);
    return JSON.parse(userPayload);
  }
  else
    return null;
}
isLoggedIn() {
  var userPayload = this.getUserPayload();
  if (userPayload)
    return userPayload.exp > Date.now() / 1000;
  else
    return false;
}
deleteToken() {
  localStorage.removeItem('token');
}

}
