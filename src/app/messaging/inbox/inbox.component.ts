import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  inboxName = "inbox name";
  @Input() singleMessage: any;
  @Input() messages: any;

  constructor() { }

  ngOnInit(): void {
  }

  cardMessage = document.getElementsByClassName('card');

  deleteMessage() {
    console.log('coucou');
    console.log(this.cardMessage[0]);
  }
}
