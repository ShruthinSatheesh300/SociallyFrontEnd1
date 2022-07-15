import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private httpService: HttpService) { }

  registerService(reqData: any) {
		let header = {
			headers: new HttpHeaders({
				'Content-type': 'application/json',
				
			})
		}

		return this.httpService.postService('/users/userregister', reqData, header);
	}
}
