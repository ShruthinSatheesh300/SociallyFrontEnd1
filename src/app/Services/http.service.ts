import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseurl

  constructor(private httpClient: HttpClient) { }

  postService(url: string, reqData: any, headers: any) {
    return this.httpClient.post(this.baseUrl + url, reqData,headers)
  }
}
