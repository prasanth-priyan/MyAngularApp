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
      'Authorization': 'token c470328a6c4647a31a2c824f72250f4cd9b6e15a'
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
