import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor(private apiService: ApiService) { }
  
  async getPerformance() {
    try {
      return await this.apiService.get(`performance`);
    } catch (err) {
      console.log('Could not load rooms.', err);
    }
  }

}
