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
      'Authorization': 'token c470328a6c4647a31a2c824f72250f4cd9b6e15a'
    })
  }
 getDetails(query){
   return this.http.get(this._url+query, this.options);
 }
}
