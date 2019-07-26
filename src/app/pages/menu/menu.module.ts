import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'asignatura', loadChildren: '../asignatura/asignatura.module#AsignaturaPageModule' },
      { path: 'preguntas', loadChildren: '../preguntas/preguntas.module#PreguntasPageModule' },
      { path: 'realizar-examen', loadChildren: '../realizar-examen/realizar-examen.module#RealizarExamenPageModule' },
      { path: 'docentes', loadChildren: '../docentes/docentes.module#DocentesPageModule' },
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
