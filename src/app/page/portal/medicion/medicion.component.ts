import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.component.html',
  styleUrls: ['./medicion.component.css'],
})
export class MedicionComponent implements OnInit {
  @Input() type: string;
  @Input() date: string;
  @Input() value: any;

  constructor() {}

  ngOnInit(): void {}
}
