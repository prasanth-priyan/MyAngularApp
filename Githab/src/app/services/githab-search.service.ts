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
      'Authorization': 'token 5817c75fad4c3f91d9c9245ecb6fa67eef4bb020'
    })
  }
 getRepo(query){
   return this.http.get(this._url+query, this.options);
 }
}
