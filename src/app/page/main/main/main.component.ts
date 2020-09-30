import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {
    /* console.log('Constructor');
    window.document.getElementById('main').addEventListener('scroll', function(event){
      console.log('EventScroll: ', event);
    }); */
  }

  ngOnInit(): void {
  }

}
