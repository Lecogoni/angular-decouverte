import { Component, OnInit } from '@angular/core';
import { DataMessagesService, Message } from '../services/data-messages.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-message',
  templateUrl: './single-message.component.html',
  styleUrls: ['./single-message.component.scss']
})
export class SingleMessageComponent implements OnInit {

  messages: Message[] = [];
  message: any;

  constructor(private service: DataMessagesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const messageId = +this.route.snapshot.params['id'];
    this.message = this.getMessageById(messageId);
  }

  getMessageById(messageId: number): Message {
    const message = this.messages.find(message => message.id === messageId);
    if (!message) {
      throw new Error('message not found!');
    } else {
      return message;
    }
  }
}
