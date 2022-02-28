import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { InboxComponent } from './inbox/inbox.component';
import { NbCardModule, NbLayoutModule, NbListModule, NbSidebarModule, NbStepperModule } from '@nebular/theme';



@NgModule({
  declarations: [
    MessagesComponent,
    InboxComponent
  ],
  imports: [
    CommonModule,
    NbSidebarModule.forRoot(),
    NbListModule,
    NbCardModule,
    NbStepperModule,
  ],
  exports: [
    MessagesComponent,
    InboxComponent
  ]
})
export class MessagingModule { }
