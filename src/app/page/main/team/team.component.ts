import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Estudiante } from '../../../models/estudiante';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  estudiantes: Estudiante[]=[
    {name:'GABRIELA MUNOZ', descrip:'Estudiante de ingeniería eléctrica apasionada por el diseño y la electrónica, por el deporte de taekwondo',facebook:'',instagram:'',twitter:'',img:'mujer1.png'},
    {name:'MISAEL LANDERO', descrip:'Estudiante de Ing en sistemas. apasionado por la intendencia artificia, ciencias de datos.',facebook:'',instagram:'instagram.com/misael_landero',twitter:'twitter.com/misa9827',img:'hombre.png'},
    {name:'DIANA ROSALES', descrip:'Estudiante de la carrera de Ingenieria Mecanica  apasionada por la naturaleza, la lectura y el arte.',facebook:'',instagram:'',twitter:'',img:'Diana.jpg'},
    {name:'WUILMER GARCIA', descrip:'Estudiante de Ingeniería Civil, comprometido con la sociedad a brindar estructuras seguras.',facebook:'https://www.facebook.com/jose.w.garciaortiz',instagram:'https://instagram.com/wuilmer081?igshid=1vo6lfbs068b',twitter:'https://twitter.com/wuilmer081?s=09',img:'Wuil.jpg'},
    {name:'JEANLUC BOQUIN', descrip:'Estudiante de ingenieria en sistemas apacionado por los sistemas automatizados',facebook:'',instagram:'',twitter:'',img:'Jean.png'},
    {name:'ANA THOMPSON', descrip:'Estudiante de ingeniería eléctrica apasionada por el diseño y la electrónica',facebook:'https://www.facebook.com/AnaCThompson',instagram:'https://instagram.com/anathompson_?igshid=fzidnavyi3f0',twitter:'https://twitter.com/anathompsong?s=09',img:'Ana.jpg'},
    {name:'OSCAR R. GARCIA', descrip:'Estudiante de la licenciatura en astronomía y astrofísica, apacionado por el futbol',facebook:'',instagram:'',twitter:'',img:'hombre1.png'},
    {name:'DESCONOCIDO DESCONOCIDO', descrip:'Estudiante, comprometido con la sociedad a brindar estructuras seguras.',facebook:'',instagram:'',twitter:'',img:'mujer.png'}
];
  constructor() { 
    AOS.init();
  }

  ngOnInit(): void {
  }

}
