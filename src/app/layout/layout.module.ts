import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarzoneComponent } from './navbarzone/navbarzone.component';
import { AsidezoneComponent } from './asidezone/asidezone.component';
import { ContentzoneComponent } from './contentzone/contentzone.component';
import { FooterzoneComponent } from './footerzone/footerzone.component';
import { TemplateComponent } from './template/template.component';
import { NbCardModule, NbLayoutModule, NbListModule, NbSidebarModule, NbStepperModule } from '@nebular/theme';
import { MessagingModule } from '../messaging/messaging.module';



@NgModule({
  declarations: [
    NavbarzoneComponent,
    AsidezoneComponent,
    ContentzoneComponent,
    FooterzoneComponent,
    TemplateComponent,
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbListModule,
    NbCardModule,
    NbStepperModule,
    MessagingModule
  ],
  exports: [
    NavbarzoneComponent,
    AsidezoneComponent,
    ContentzoneComponent,
    FooterzoneComponent,
    TemplateComponent,
  ]
})
export class LayoutModule { }
