import { Component, Input, OnInit } from '@angular/core';
import { DataMessagesService, Message } from '../services/data-messages.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {



  inboxName = "inbox name";
  @Input() singleMessage: any;
  messages: Message[] = [];

  constructor(private service: DataMessagesService) { }

  ngOnInit(): void {
    this.messages = this.service.getMessages();
  }

  cardMessage = document.getElementsByClassName('card');

  deleteMessage() {
    console.log('coucou');
  }
}
