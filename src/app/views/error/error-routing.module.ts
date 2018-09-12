import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorizedErrorComponent } from './unauthorized-error/unauthorized-error.component';

const routes: Routes = [
  { path: '401', component: UnauthorizedErrorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
