import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import {environment} from '../../environments/environment'
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
export class Message {
  constructor(public content: string,public author: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token=environment.dialogflow.ForexBot;
  readonly client=new ApiAiClient({accessToken:this.token});
  conversation = new Subject<Message[]>();

  constructor() { }

  update(msg :Message){
    this.conversation.next([msg]);
  }

  converse(msg:string){
    const userMessage=new Message(msg,'user');
    this.update(userMessage);
    return this.client.textRequest(msg)
                  .then(res=>{
                    const speech=res.result.fulfillment.speech;
                    console.log(speech);
                    const botMessage=new Message(speech,'bot');
                    this.update(botMessage);
                  });
  }
}
