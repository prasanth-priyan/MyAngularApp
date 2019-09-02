import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithabSearchService {
  
  constructor(private http:HttpClient) { }
  options = {
    headers: new HttpHeaders({
      'Authorization': 'token 407455f4c41c6115f03d66e4c45cf37267931a9e'
    })
  }
 getRepo(query){
   return this.http.get("https://api.github.com/search/repositories?q="+query, this.options);
 }
}
