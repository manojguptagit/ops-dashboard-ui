import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { UnauthorizedErrorComponent } from './unauthorized-error/unauthorized-error.component';

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  declarations: [UnauthorizedErrorComponent]
})
export class ErrorModule { }
