import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = environment.baseurl;

  constructor(private httpClient: HttpClient) {}

  postService(url: string, reqData: object) {
    return this.httpClient.post(this.baseUrl + url, reqData);
  }

  getService(url: string, params: any) {
    return this.httpClient.get(this.baseUrl + url, {
      params,
      observe: 'response',
    });
  }

  getallService(url: string) {
    return this.httpClient.get (this.baseUrl + url )
  }
}
