import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';

export enum Routing {
  root = 'dashboard'
}

const routes: Routes = [
  {
    path: Routing.root,
    pathMatch: 'full',
    component: GridComponent
  },
  {
    path: '**',
    redirectTo: '/' + Routing.root,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
