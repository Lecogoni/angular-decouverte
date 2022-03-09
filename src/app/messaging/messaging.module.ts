import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { InboxComponent } from './inbox/inbox.component';
import { MessageComponent } from './message/message.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { WrittingComponent } from './writting/writting.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { SingleMessageComponent } from './single-message/single-message.component';


@NgModule({
  declarations: [
    MessagesComponent,
    InboxComponent,
    MessageComponent,
    MessagesListComponent,
    WrittingComponent,
    NotificationComponent,
    SingleMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MessagesComponent,
    InboxComponent,
    MessageComponent,
    MessagesListComponent,
    NotificationComponent
  ]
})
export class MessagingModule { }
