import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: "pie",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
