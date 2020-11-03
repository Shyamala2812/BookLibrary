import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {
    // this.getTransaction();
   }

  async getTransaction(bookuserId, id): Promise<any> {
    return await this.http.get(`http://localhost:5555/api/v1/transaction/?${bookuserId}=${id}`).toPromise();
  }

  async createTransaction(data): Promise<any> {
    return await this.http.post('http://localhost:5555/api/v1/transaction', data).toPromise();
  }
}
