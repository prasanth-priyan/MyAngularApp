import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  baseUrl="http://localhost:3000/repos";

  constructor(private http:HttpClient) { }
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ca590bad4bb3ef8177deb5c18e5f5f2ee3fff809'
    })
  }
  getRepos(){
    return this.http.get(this.baseUrl, this.options);
  }
  addRepo(repo) {
    return this.http.post(this.baseUrl, repo, this.options);
  }
  delRepo(id){
    return this.http.delete(this.baseUrl+"/"+id, this.options);    
  }
}
