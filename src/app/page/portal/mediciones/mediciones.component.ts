import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.component.html',
  styleUrls: ['./mediciones.component.css'],
})
export class MedicionesComponent implements OnInit {
  data: any[];

  constructor() {}

  ngOnInit(): void {}

  onNewQuery(e) {
    this.data = e.data;
    console.log(e);
  }
}
