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
  @Input() units: any;

  formatedDate: string;

  constructor() {}

  ngOnInit(): void {
    let d = new Date(this.date);
    this.formatedDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }
}
