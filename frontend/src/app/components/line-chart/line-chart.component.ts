import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as moment from 'moment';
import _ from 'lodash';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input() startDate;
  @Input() endDate;
  @Input() data;

  public lineChartData: ChartDataSets[] = [{ data: [], label: 'Conteggio' }];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [{}],
    },
  };
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  counter: [] = [];

  constructor() {}

  ngOnInit(): void {
    let start = moment(this.startDate);
    let end = moment(this.endDate);

    let duration = moment.duration(end.diff(start));

    for (let i = 0; i < duration.asDays(); i++) {
      const date = moment(this.startDate).add(i, 'days').format('MM-DD');
      this.lineChartLabels.push(date.toString());
    }

    this.counter = _.chain(this.data)
      .groupBy('data')
      .map((value, key) => ({ data: key, request: value?.length }))
      .value();

    this.counter.forEach((count) => {
      const { request } = count;
      this.lineChartData[0]['data'].push(request);
    });
  }
}
