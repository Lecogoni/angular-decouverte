import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataMessagesService, Message } from '../services/data-messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {

  messageComponenTtitle: string = "Listes de messages"

  @Input() singleMessage: string = 'coucou';

  @Output() newItemEvent = new EventEmitter();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  messages: Message[] = [];

  constructor(private service: DataMessagesService) { }

  ngOnInit(): void {
    this.messages = this.service.getMessages();
  }


  uppercaseTitle(): void {
    this.messages[0].title = this.messages[0].title.toUpperCase();
  }

  remove(event: any) {
    const index: number = this.messages.indexOf(event);
    this.messages.splice(index, 1);
  }

  markAsRead(event: any) {
    const index: number = this.messages.indexOf(event);
    this.messages[index].isRead = true;
    console.log(this.messages);

  }
}
