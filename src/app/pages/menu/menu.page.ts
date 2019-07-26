import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pagesAdmin = [
    {
      title: 'Docente',
      url: '/menu/docente',
      icon: 'person'
    },{
      title: 'Asignatura',
      url: '/menu/asignatura',
      icon: 'person'
    },{
      title: 'Estadisticas',
      url: '/menu/estadistica',
      icon: 'person'
    },
  ];
  pagesDocente = [
    {
      title: 'Docente',
      url: '/menu/docente',
      icon: 'person'
    },{
      title: 'Asignatura',
      url: '/menu/asignatura',
      icon: 'person'
    },{
      title: 'Resultados',
      url: '/menu/estadistica',
      icon: 'person'
    },
  ];
  pagesEstudiante = [
    {
      title: 'Examen',
      url: '/menu/realizar-examen',
      icon: 'person'
    },{
      title: 'Resultados',
      url: '/menu/resultados',
      icon: 'person'
    },
  ];
  pages = [];
  constructor(private router: Router, private global: GlobalService) { }

  ngOnInit() {
    switch (this.global.persona.rol) {
      case 0:
        this.pages = this.pagesEstudiante;
      break;
      case 1:
        this.pages = this.pagesDocente;
      break;
      case 2:
        this.pages = this.pagesAdmin;
      break;
    }
  }

  openUrl(url: string){
    this.router.navigate([url]);
  }

}
