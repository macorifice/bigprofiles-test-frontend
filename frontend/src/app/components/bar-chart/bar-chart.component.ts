import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  data = [
    2.6,
    3.2,
    4.2,
    3.3,
    2.7,
    4.5,
    5.9,
    2.7,
    1.8,
    1.7,
    1.3,
    1.8,
    1,
    1.4,
    1.3,
    1.4,
    1.1,
    1.1,
    1,
    1.4,
    1,
    1.4,
    1.3,
    1.5,
    1.1,
    1.2,
    1.3,
    1.3,
    0.8,
    0.9,
    1,
    1.1,
    1,
    1,
    0.8,
  ];
  series = this.data.map((item, i) => [
    Date.UTC(Math.floor(2016 + (7 + i) / 12), ((7 + i) % 12) + 1, 1),
    item,
  ]);

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: 'Distribuzione valori',
        align: 'left',
        margin: 25,
        style: {
          color: '#333333',
          fontSize: '14px',
        },
      },
      yAxis: [
        {
          min: 0.0,
          max: 6.0,
          title: {
            text: 'Conteggio',
          },
        },
      ],
      xAxis: {
        type: 'datetime',
        min: Date.UTC(2016, 8, 1),
        max: Date.UTC(2019, 5, 1),
      },
      series: [
        {
          name: 'Valori',
          type: 'column',
          data: this.series,
        },
      ],
      plotOptions: {
        series: {
          states: {
            hover: {
              enabled: false,
            },
          },
          turboThreshold: 3000,
        },
      },
      legend: {
        itemStyle: {
          color: '#666666',
          fontSize: '12px',
        },
      },
      tooltip: {
        shared: true,
        useHTML: true,
        shadow: false,
        borderColor: '#BBBBBB',
      },
    };
  }
}
