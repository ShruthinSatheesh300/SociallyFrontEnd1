import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpService) {}

  public registerUser(reqData: object): Observable<object> {
    return this.httpService.postService('/users/', reqData);
  }

  public login(reqData: object): Observable<object> {
    return this.httpService.getService('/users/', reqData);
  }

  public getAllUserPosts():Observable<object> {
    return this.httpService.getallService('/users/:_id/posts')
  }

  public getToken(){
    return localStorage.getItem('Authorization')
  }
}
