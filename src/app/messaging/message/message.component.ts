import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input('data') message: any;
  @Output() delete = new EventEmitter();
  @Output() isRead = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


  deleteMsg(): void {
    this.delete.emit(this.message)
  }

  markAsRead() {
    this.isRead.emit(this.message)
  }

  editMsg(): void {

  }

}
