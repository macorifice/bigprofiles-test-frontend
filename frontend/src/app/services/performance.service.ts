import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class PerformanceService {
  private headers: HttpHeaders;
  private apiLocation: string;

  constructor(private http: HttpClient) {
    this.apiLocation = 'http://localhost:3000/api/v1.0/';
    this.headers = new HttpHeaders();
  }

  async getPerformance() {
    const jobs = await this.http.get(this.apiLocation + 'performance', {
      headers: this.headers,
    });
    return jobs;
  }
}
