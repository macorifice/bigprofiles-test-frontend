import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import _ from 'lodash';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  // @Input() data: any = '';
  @Input() startDate = '';
  @Input() endDate = '';

  categories: any = '';
  range: any = '';
  dates: any = '';
  points = [];
  data = [2.6, 3.2, 4.2, 3.3, 2.7, 4.5, 5.9, 2.7, 1.8, 1.7, 1.3, 1.8, 1, 1.4, 1.3, 1.4, 1.1, 1.1, 1, 1.4, 1, 1.4, 1.3, 1.5, 1.1, 1.2, 1.3, 1.3, 0.8, 0.9, 1, 1.1, 1, 1, 0.8]

  series = this.data.map((item, i) => [Date.UTC(Math.floor(moment(this.startDate).year() + ((7 + i) / 12)), (((7 + i) % 12) + 1), 1), item])

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {}

  ngOnInit(): void {

    this.chartOptions = {
      title: {
        text: 'Chiamate nel tempo',
        align: 'left',
        margin: 25,
        style: {
          color: '#333333',
          fontSize: '14px',
        },
      },
      yAxis: [{
        min: 0.0,
        max: 6.0,
        title: {
          text: 'Conteggio'
        }
      }],
      xAxis: {
        type: 'datetime',
        min: Date.UTC(moment(this.startDate).year(), moment(this.startDate).month(), moment(this.startDate).day()),
        max: Date.UTC(moment(this.endDate).year(), moment(this.endDate).month(), moment(this.endDate).day())
      },
      series: [{
        name: 'Data',
        type: 'spline',
        data: this.series
      }],
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
      }
    };

    // this.range = moment.range(this.startDate, this.endDate);
    // this.dates = Array.from(this.range.by('days'));
    console.log(moment.utc(this.startDate).unix());

    const timestamps = [1481000484000,1481108510000,1481215541000,1481316568000,1481417583000];
    const series_raw_data = [100,300,750,400,200];
  
    // prepare data

    for (let i = 0; i < timestamps.length; i++) {
      this.points.push([timestamps[i], series_raw_data[i]]);
    }
  
  }

}