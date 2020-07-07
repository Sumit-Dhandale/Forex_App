import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Message,ChatService} from '.././../services/chat.service';
import { scan } from 'rxjs/operators'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [];
  value: string;
  constructor(public _ChatService:ChatService) { }
  
  ngOnInit(): void {
    this._ChatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });

}
sendMessage() {
  this._ChatService.converse(this.value);
  this.value = '';
}
}
