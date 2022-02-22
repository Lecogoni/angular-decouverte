import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarzoneComponent } from './navbarzone/navbarzone.component';
import { AsidezoneComponent } from './asidezone/asidezone.component';
import { ContentzoneComponent } from './contentzone/contentzone.component';
import { FooterzoneComponent } from './footerzone/footerzone.component';



@NgModule({
  declarations: [
    NavbarzoneComponent,
    AsidezoneComponent,
    ContentzoneComponent,
    FooterzoneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarzoneComponent,
    AsidezoneComponent,
    ContentzoneComponent,
    FooterzoneComponent
  ]
})
export class LayoutModule { }
