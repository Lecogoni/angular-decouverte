import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataMessagesService, Message } from '../services/data-messages.service';

@Component({
  selector: 'app-writting',
  templateUrl: './writting.component.html',
  styleUrls: ['./writting.component.scss']
})
export class WrittingComponent implements OnInit {

  m: Message = {
    id: 0,
    title: 'titre cool',
    content: 'content funny',
    sent: new Date(),
    isRead: false
  }

  messages: Message[] = [];

  constructor(private service: DataMessagesService, private router: Router) { }

  ngOnInit(): void {
    this.messages = this.service.getMessages();
  }

  addNewMessage() {
    //console.log(this.m);
    this.messages.push(this.m)
  }

  onGoToAllMessages() {
    this.router.navigateByUrl('mailing')
  }

}
