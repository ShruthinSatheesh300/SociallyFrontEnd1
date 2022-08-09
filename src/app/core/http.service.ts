import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = environment.baseurl;

  constructor(private httpClient: HttpClient) {}

  post(url: string, reqData: object) {
    return this.httpClient.post(this.baseUrl + url, reqData);
  }

  get(url: string, params?: any) {
    return this.httpClient.get(this.baseUrl + url, {
      params,
      observe: 'response',
    });
  }
  put(url:string,reqData:object ,params?: any){
    return this.httpClient.put(this.baseUrl + url,{
      params,
      observe: 'response'
    },reqData)
  }
}
