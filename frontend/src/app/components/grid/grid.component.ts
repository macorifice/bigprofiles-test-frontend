import { Component, OnInit } from '@angular/core';
import { PerformanceService } from 'src/app/services/performance.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  tiles: Tile[] = [
    {cols: 4, rows: 1, color: 'lightblue'},
    {cols: 4, rows: 1, color: 'lightgreen'},
    {cols: 4, rows: 4, color: 'lightpink'},
    {cols: 4, rows: 4, color: 'lightblue'}
  ];

  performance: any;
  error = null;
  loading = true;

  constructor(private performanceService: PerformanceService) { }

  ngOnInit(): void {

    try {
      this.performanceService.getPerformance().then((data) => {
        this.performance = data;
        this.loading = false;
      });
    } catch (error) {
      this.error = error;
    }

  }

}
