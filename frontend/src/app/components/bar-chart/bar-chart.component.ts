import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: "column",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
