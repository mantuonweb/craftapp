import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) { }
  getTiles() {
    return this.http.get(
      './assets/data/tiles.json'
    );
  }
  getExpenses() {
    return this.http.get(
      './assets/data/series.json'
    );
  }
}
