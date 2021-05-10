import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() percentageSucceed: number = 0;
  @Input() percentageError: number = 0;

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
  };
  public pieChartLabels: Label[] = ['Resolved', 'Errors'];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  constructor() {}

  ngOnInit(): void {
    this.pieChartData.push(this.percentageSucceed);
    this.pieChartData.push(this.percentageError);
  }
}
