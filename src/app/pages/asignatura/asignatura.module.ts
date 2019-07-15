import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AsignaturaPage } from './asignatura.page';
import { TemaPage } from '../tema/tema.page';
import { TemaPageModule } from '../tema/tema.module';



const routes: Routes = [
  {
    path: '',
    component: AsignaturaPage
  }
];

@NgModule({
  entryComponents: [TemaPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemaPageModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AsignaturaPage]
})
export class AsignaturaPageModule {
  
}
