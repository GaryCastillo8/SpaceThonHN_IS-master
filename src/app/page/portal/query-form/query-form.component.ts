import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css'],
})
export class QueryFormComponent implements OnInit {
  @Output() newQuery: EventEmitter<any> = new EventEmitter();

  readingType: any = null;
  firstDate: any = null;
  lastDate: any = null;

  categories: any[] = [
    {
      name: 'Seleccionar medición',
      value: 'null',
    },
    {
      name: 'Temperatura',
      value: 'temperature',
    },
    {
      name: 'Presión',
      value: 'pressure',
    },
    {
      name: 'Altura del río',
      value: 'river',
    },
    {
      name: 'Precipitación',
      value: 'precipitation',
    },
    {
      name: 'Caudal',
      value: 'flow',
    },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onSubmit(e: any) {
    console.log(this.readingType);
    this.dataService.getData(this.readingType).subscribe(
      (response) => {
        this.newQuery.emit(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onReset() {
    this.firstDate = null;
    this.lastDate = null;
    this.readingType = null;
  }
}
