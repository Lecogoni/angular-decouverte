import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MailingComponent } from './mailing/mailing.component';
import { MessagingModule } from '../messaging/messaging.module';

@NgModule({
  declarations: [
    DashbordComponent,
    MailingComponent
  ],
  imports: [
    CommonModule,
    MessagingModule
  ]
})
export class PagesModule { }
