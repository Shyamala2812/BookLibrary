import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  async addCategoryToList(data): Promise<any> {
    return await this.http.post('http://localhost:5555/api/v1/category', data).toPromise();
  }

  async getCategoryList(): Promise<any> {
    return await this.http.get('http://localhost:5555/api/v1/category').toPromise();

  }

  async editCategoryList(id, data): Promise<any> {
    return await this.http.put(`http://localhost:5555/api/v1/category/${id}`, data).toPromise();
  }

  async deleteCategoryList(id): Promise<any> {
    return await this.http.delete(`http://localhost:5555/api/v1/category/${id}`).toPromise();

  }
}
