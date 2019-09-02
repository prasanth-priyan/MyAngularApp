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
      'Authorization': 'token 5817c75fad4c3f91d9c9245ecb6fa67eef4bb020'
    })
  }
 getDetails(query){
   return this.http.get(this._url+query, this.options);
 }
}
