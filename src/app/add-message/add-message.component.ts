import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {

  constructor(public messagesServices: MessageService) {}
  message: string = ''

  addMessage() {
    this.messagesServices.add(this.message)
    this.message=''
  }
}
