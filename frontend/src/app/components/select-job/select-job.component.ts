import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-select-job',
  templateUrl: './select-job.component.html',
  styleUrls: ['./select-job.component.scss']
})
export class SelectJobComponent implements OnInit {

  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
  }

}
