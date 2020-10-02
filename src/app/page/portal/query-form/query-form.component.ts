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

  isWaiting: boolean = false;

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

  onSubmit(e: any): void {
    this.isWaiting = true;
    if (this.readingType == null) {
      this.isWaiting = false;
      alert('Tiene que seleccionar un tipo de medición para consultar.');
      return;
    }
    if (this.firstDate != null && this.lastDate != null) {
      let tmpFirst: any = new Date(this.firstDate);
      let tmpLast: any = new Date(this.lastDate);

      let formatedDate: string = this.formatDate(tmpFirst, tmpLast);

      this.dataService.getDataByDate(this.readingType, formatedDate).subscribe(
        (response) => {
          this.isWaiting = false;
          this.newQuery.emit({
            type: this.readingType,
            date: formatedDate,
            data: response.data.map((item) => {
              return {
                date: item.date,
                value: item[this.readingType] / 1000,
              };
            }),
          });
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      if (this.firstDate != null || this.lastDate != null) {
        alert(
          'Tiene que introducir las 2 fechas para poder hacer las consultas filtradas por fechas. Se hara la consulta sin el filtro.'
        );
      }

      this.dataService.getData(this.readingType).subscribe(
        (response) => {
          this.isWaiting = false;
          this.newQuery.emit({
            type: this.readingType,
            data: response.data.map((item) => {
              return {
                date: item.date,
                value: item[this.readingType] / 1000,
              };
            }),
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  onReset() {
    this.firstDate = null;
    this.lastDate = null;
    this.readingType = null;
  }

  private formatDate(d1: any, d2: any) {
    let tmpD1: string = `${d1.getFullYear()}.${
      d1.getMonth() + 1
    }.${d1.getDate()}`;
    let tmpD2: string = `${d2.getFullYear()}.${
      d2.getMonth() + 1
    }.${d2.getDate()}`;

    return `${tmpD1}-${tmpD2}`;
  }
}
