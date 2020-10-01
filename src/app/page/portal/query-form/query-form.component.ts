import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css'],
})
export class QueryFormComponent implements OnInit {
  categories: string[] = [
    '--Select variable--',
    'Temperature',
    'Pressure',
    'River',
    'Precipitation',
    'Flow',
  ];

  constructor() {}

  ngOnInit(): void {}
}
