import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  checkLogin(data): Promise<any> {
    return this.http.post('http://localhost:5555/api/v1/login', data).toPromise();
   }
}
