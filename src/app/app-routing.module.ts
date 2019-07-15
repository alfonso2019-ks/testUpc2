import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'asignatura', pathMatch: 'full' },
  { path: 'asignatura', loadChildren: './pages/asignatura/asignatura.module#AsignaturaPageModule' },
  //{ path: 'tema', loadChildren: './tema/tema.module#TemaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
