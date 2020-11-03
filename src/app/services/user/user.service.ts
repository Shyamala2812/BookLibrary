import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async getUsersList(): Promise<any> {
    return await this.http.get('http://localhost:5555/api/v1/user').toPromise();
  }

  async getOneUserDetails(id): Promise<any>{
    return await this.http.get(`http://localhost:5555/api/v1/user/${id}`).toPromise();
  }

  async createUsersList(data): Promise<any> {
    return await this.http.post('http://localhost:5555/api/v1/user', data).toPromise();
  }

  async editUsersList(id, data): Promise<any> {
    return await this.http.put(`http://localhost:5555/api/v1/user/${id}`, data).toPromise();
  }

  async deleteUsersList(id): Promise<any> {
    return await this.http.delete(`http://localhost:5555/api/v1/user/${id}`).toPromise();
  }


}
