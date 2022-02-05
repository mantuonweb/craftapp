import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private http: HttpClient) { }
  getCustomers() {
    return this.http.get(
      './assets/data/customers.json'
    );
  }
}
