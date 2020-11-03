import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooksList(): Promise<any> {
    return this.http.get('http://localhost:5555/api/v1/book').toPromise();
  }

  getBookDetails(id): Promise<any> {
    return this.http.get(`http://localhost:5555/api/v1/book/${id}`).toPromise();
  }

  createBooksList(data): Promise<any> {
    return this.http.post('http://localhost:5555/api/v1/book', data).toPromise();
  }

  editBooksList(id, data): Promise<any> {
    return this.http.put(`http://localhost:5555/api/v1/book/${id}`, data).toPromise();
  }

  deleteBooksList(id): Promise<any> {
    return this.http.delete(`http://localhost:5555/api/v1/book/${id}`).toPromise();
  }

}
