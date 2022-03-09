import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataMessagesService, Message } from '../services/data-messages.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {

  messages: Message[] = [];

  constructor(private service: DataMessagesService, private router: Router) { }

  ngOnInit(): void {
    this.messages = this.service.getMessages();
  }


}
