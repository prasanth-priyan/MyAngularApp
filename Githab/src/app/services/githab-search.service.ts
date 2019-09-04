import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithabSearchService {
  
  _url="https://api.github.com/search/repositories?q=";
  constructor(private http:HttpClient) { }
  options = {
    headers: new HttpHeaders({
      'Authorization': 'token bfed737f389ce42f8a8ed29a50a8cd890d105641'
    })
  }
 getRepo(query){
   return this.http.get(this._url+query, this.options);
 }
}
