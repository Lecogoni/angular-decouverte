import { Component, OnInit } from '@angular/core';

// ici on type la structure de nos msg
export interface Message {
  title: string;
  content: string;
  sent?: Date;
  isRead?: boolean;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messageList = "component messages";

  singleMessage: string = 'coucou';

  singleMessage2: Message = {
    title: "new single message",
    content: 'read',
    sent: new Date(),
    isRead: false
  }



  messages: Message[] = [
    {
      title: "Message 1 in list",
      content: 'read',
      sent: new Date(),
      isRead: false
    },
    {
      title: "Message 2 in list",
      content: 'read',
      sent: new Date(),
      isRead: false
    },
    {
      title: "Message 3 in list",
      content: 'read',
      sent: new Date(),
      isRead: false
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }


  uppercaseTitle(): void {
    this.messages[0].title = this.messages[0].title.toUpperCase();
  }

}
