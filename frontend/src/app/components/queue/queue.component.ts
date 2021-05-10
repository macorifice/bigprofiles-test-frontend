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
    this.latestElements = this.data.slice(-10);

    this.latestElements.forEach((el, index) => {
      const { jobId, data, status } = el;
      let newObj = {};
      newObj[`Chiamata ${index+1}`] = {
        jobId, data
      };
      newObj[`Risposta ${index+1}`] = {
        status
      };
      this.formattedResult.push(newObj);
    });
  }
}
