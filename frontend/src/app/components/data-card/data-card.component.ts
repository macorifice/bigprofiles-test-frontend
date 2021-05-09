import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent implements OnInit {
  @Input() label: string;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
