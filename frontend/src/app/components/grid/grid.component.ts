import { Component, Input, OnInit } from '@angular/core';
import { Performance } from 'src/app/models/performance.model';
import { PerformanceService } from 'src/app/services/performance.service';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/models/job.model';
import { FormControl, FormGroup } from '@angular/forms';
import _ from 'lodash';
import * as moment from 'moment';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  selected = '';

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  tiles: Tile[] = [
    { cols: 4, rows: 1, color: '' },
    { cols: 4, rows: 1, color: '' },
    { cols: 4, rows: 4, color: '' },
    { cols: 4, rows: 4, color: '' },
  ];

  performance: Performance[] = [];
  jobList: Job[] = [];
  loading: boolean = true;
  error: any;
  totalRequests: number;
  totalErrors: number;
  average: number;
  averageLabel: string = 'ms';
  averageTime: string;
  filteredData: any;

  disableDatePicker: boolean = true;
  showResult: boolean = false;
  percentageError: number;
  percentageSucceed: number;
  value1: number;
  value2: number;
  value3: number;
  value4: number;

  constructor(
    private jobService: JobService,
    private performanceService: PerformanceService
  ) { }

  async ngOnInit() {
    try {
      (await this.jobService.getJobs()).subscribe((data) => {
        this.jobList = _.map(_.uniqBy(data, 'job'));
        this.jobList = _.orderBy(this.jobList, 'job', 'asc');
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
    }
  }

  async onJobHandler() {
    this.disableDatePicker = false;
  }

  async onDateHandler() {
    this.loading = true;
    try {
      setTimeout(async () => {
        (await this.performanceService.getPerformance()).subscribe((data) => {
          this.filteredData = _.filter(
            data,
            (job) =>
              ((job) => job.jobId === this.selected) && (moment(job.data).isBetween(
                this.range.value.start,
                this.range.value.end
              ) === true)
          );
          this.totalRequests = _.countBy(
            this.filteredData,
            (obj) => obj._id !== ''
          ).true;
          this.totalErrors = _.countBy(
            this.filteredData,
            (obj) => obj.status === 'failed'
          ).true;
          this.average = Math.round(
            _.sumBy(this.filteredData, 'responseTime') / this.totalRequests
          );
          this.averageTime = this.average + this.averageLabel;
          this.percentageError = Math.round(this.totalErrors / this.totalRequests * 100);
          this.percentageSucceed = 100 - this.percentageError;
          
          this.value1 = _.countBy(
            this.filteredData,
            (obj) => obj.value === 1
          ).true;

          this.value2 = _.countBy(
            this.filteredData,
            (obj) => obj.value === 2
          ).true;


          this.value3 = _.countBy(
            this.filteredData,
            (obj) => obj.value === 3
          ).true;


          this.value4 = _.countBy(
            this.filteredData,
            (obj) => obj.value === 4
          ).true;


          if (!_.isEmpty(this.filteredData)) {
            this.showResult = true;
          }
          
          this.loading = false;
        });
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }
}
