import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.css'
})
export class ListMessageComponent {
  constructor(public messagesServices: MessageService) {}

  
}
