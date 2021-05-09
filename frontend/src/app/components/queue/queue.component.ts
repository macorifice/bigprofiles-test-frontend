import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    // this.data = this.data.slice(Math.max(this.data.length - 5, 1));
    // console.log(this.data);

  }

}
