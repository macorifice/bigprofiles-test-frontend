import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() percentageError: number;
  @Input() percentageSucceed: number;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false,
      },
      title: {
        text: 'Percentuale errori',
        align: 'left',
        margin: 25,
        style: {
          color: '#333333',
          fontSize: '14px',
        },
      },
      tooltip: {
        shared: true,
        useHTML: true,
        shadow: false,
        borderColor: '#BBBBBB',
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      legend: {
        itemStyle: {
          color: '#666666',
          fontSize: '12px',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Esito richieste',
          data: [
            ['Positive', this.percentageSucceed ],
            {
              name: 'Errori',
              y: this.percentageError,
              sliced: true,
              selected: true,
            },
          ],
        },
      ],
    };
  }
}
