import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RepoDataService {
  baseUrl: string = "https://api.github.com/user/repos";
  delUrl: string = "https://api.github.com/repos/"
  constructor(private httpClient: HttpClient) { }
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token bfed737f389ce42f8a8ed29a50a8cd890d105641'
    })
  }
  newRepository(obj) {
    return this.httpClient.post(this.baseUrl, obj, this.options);
  }
  deleteRepository(fname){
    return this.httpClient.delete(this.delUrl+fname, this.options);
  }
}
