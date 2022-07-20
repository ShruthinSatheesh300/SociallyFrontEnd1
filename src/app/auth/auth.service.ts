import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Authorization: any;
  constructor(private httpService: HttpService) {}

  registerUser(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    return this.httpService.postService('/users/', reqData, header);
  }

  login(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    return this.httpService.getService('/users/', reqData);
  }
}
