import { Injectable } from '@angular/core';


export interface Message {
  id?: number,
  title: string;
  content: string;
  sent?: Date;
  isRead?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class DataMessagesService {

  messages: Message[] = [
    {
      id: 1,
      title: "Message 1 in list",
      content: 'Contenu du message 1',
      sent: new Date(),
      isRead: false
    },
    {
      id: 2,
      title: "Message 2 in list",
      content: 'Contenu du message 2',
      sent: new Date(),
      isRead: true
    },
    {
      id: 3,
      title: "Message 3 in list",
      content: 'Contenu du message 3',
      sent: new Date(),
      isRead: false
    }
  ]

  constructor() { }

  getMessages() {
    return this.messages;
  }

  getMessageByIdg(messageId: number): Message {
    const message = this.messages.find(message => message.id === messageId);
    if (!message) {
      throw new Error('message not found!');
    } else {
      return message;
    }
  }
}
