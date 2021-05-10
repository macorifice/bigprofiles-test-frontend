import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  @Input() value1 = 0;
  @Input() value2 = 0;
  @Input() value3 = 0;
  @Input() value4 = 0;

  // Bar
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Valori'
      }
    }], yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Conteggio'
      }
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Distribuzione valori'
    }
  };
  public barChartLabels: Label[] = ['1', '2', '3', '4'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit(): void {
    this.barChartData.push({ data: [this.value1, this.value2, this.value3, this.value4], label: 'Valori' })
  }
}