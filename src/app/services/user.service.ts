import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUserUrl, registerUserUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(data:any){
    return this.http.post(registerUserUrl,data);
  }

  loginUser(data:any){
    return this.http.post(loginUserUrl,data);
  }
}
