import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = environment.baseurl;

  constructor(private httpClient: HttpClient) {}

  postService(url: string, reqData: any, headers: any) {
    return this.httpClient.post(this.baseUrl + url, reqData, headers);
  }

  getService(url: string, params: any){
    return this.httpClient.get(this.baseUrl + url ,{ params ,observe: 'response' });
    
    
  }
}
