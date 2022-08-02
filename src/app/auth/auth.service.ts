import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../core/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpService) {}

  public registerUser(reqData: object): Observable<object> {
    return this.httpService.post('/users/', reqData);
  }

  public login(reqData: object): Observable<object> {
    return this.httpService.get('/users/', reqData);
  }

  public getToken() {
    return localStorage.getItem('Authorization');
  }
}
