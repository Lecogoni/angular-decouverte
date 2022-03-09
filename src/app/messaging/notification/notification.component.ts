import { Component, OnInit } from '@angular/core';
import { DataMessagesService, Message } from '../services/data-messages.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  /* Declaration Zone */

  messages: Message[] = [];
  unReadMessages: number = 0;

  constructor(private service: DataMessagesService) { }

  ngOnInit(): void {
    this.messages = this.service.getMessages();
  }

  getUnreadMessageNumber() {
    let result = 0;
    this.messages.forEach(e => {
      if (e.isRead == false) {
        result++;
      }
    });
    return result;
  }
}
