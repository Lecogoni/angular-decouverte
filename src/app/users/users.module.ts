import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons/persons.component';
import { RoutingModule } from '../app.routing.module';


@NgModule({
  declarations: [
    PersonsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    PersonsComponent
  ]
})
export class UsersModule { }
