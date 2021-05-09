import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobService {

  private headers: HttpHeaders;
  private apiLocation: string;

  constructor(private http: HttpClient) {
    this.apiLocation = 'http://localhost:3000/api/v1.0/';
    this.headers = new HttpHeaders();
  }

  async getJobs() {
    const jobs = await this.http.get(this.apiLocation + 'value', {headers: this.headers} );
    return jobs;
  }
}
