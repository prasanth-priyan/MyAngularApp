import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithabRepoService {

  _url="https://api.github.com/repos/";
  constructor(private http:HttpClient) { }
  options = {
    headers: new HttpHeaders({
      'Authorization': 'token ca590bad4bb3ef8177deb5c18e5f5f2ee3fff809'
    })
  }
 getDetails(query){
   return this.http.get(this._url+query, this.options);
 }
}
