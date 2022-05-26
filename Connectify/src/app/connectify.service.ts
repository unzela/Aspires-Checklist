import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectifyService {

  baseURL: string = 'https://localhost:44306/api/Connectify';
  constructor(private http : HttpClient) { }
  getCheckList()
  {
    let url = this.baseURL;
    return this.http.get(url);
  }
}
