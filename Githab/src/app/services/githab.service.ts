import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithabService {
  public username="";
  constructor(private http:HttpClient) {
   }
   options = {
     headers: new HttpHeaders({
       'Authorization': 'token 407455f4c41c6115f03d66e4c45cf37267931a9e'
     })
   }
  getUser(){
    return this.http.get("https://api.github.com/user"+this.username+"/repos", this.options);
  }
}
