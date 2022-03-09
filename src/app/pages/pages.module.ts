import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagingModule } from '../messaging/messaging.module';
import { MailingComponent } from './mailing/mailing.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MailingComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MessagingModule
  ]
})
export class PagesModule { }
