import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {
  @Input() data: any;

  latestElements: [] = [];
  formattedResult: object[] = [];

  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {
    this.latestElements = this.data.slice(-5);

    this.latestElements.forEach((el) => {
      const { jobId, data, status } = el;
      let newObj = {};
      newObj["request"] = {
        jobId, data
      };
      newObj["response"] = {
        status
      };
      this.formattedResult.push(newObj);
    });
  }
}
