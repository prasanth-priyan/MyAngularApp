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
      'Authorization': 'token c470328a6c4647a31a2c824f72250f4cd9b6e15a'
    })
  }
  newRepository(obj) {
    return this.httpClient.post(this.baseUrl, obj, this.options);
  }
  deleteRepository(fname){
    return this.httpClient.delete(this.delUrl+fname, this.options);
  }
}
