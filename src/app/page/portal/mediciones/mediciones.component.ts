import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.component.html',
  styleUrls: ['./mediciones.component.css'],
})
export class MedicionesComponent implements OnInit {
  data: any[] = [];
  controlUnits: any = {};
  dateFormat: any;
  type: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onNewQuery(e) {
    this.data = e.data;
    this.type = e.type;
    this.dateFormat = e.date ? e.date : false;
    this.getControlUnits(e.type);
    console.log(e);
  }

  onDownload() {
    let file: any = new Blob([JSON.stringify(this.data)], {
      type: 'application/json',
    });
    saveAs(file, 'data.json');
  }

  private getControlUnits(type: string) {
    switch (type) {
      case 'temperature':
        this.controlUnits.name = 'Temperatura';
        this.controlUnits.units = 'ºC';
        break;

      case 'pressure':
        this.controlUnits.name = 'Presión';
        this.controlUnits.units = 'Pa';
        break;

      case 'river':
        this.controlUnits.name = 'Altura de río';
        this.controlUnits.units = 'm';
        break;

      case 'precipitation':
        this.controlUnits.name = 'Precipitación';
        this.controlUnits.units = 'mm';
        break;

      case 'flow':
        this.controlUnits.name = 'Caudal';
        this.controlUnits.units = 'l/h';
        break;

      default:
        break;
    }
  }
}
