import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChatService } from './chat.service';
import { chat } from './chat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chat: chat[];
  @ViewChild('chatName') chatName: ElementRef;
  @ViewChild('chatMessage') chatMessage: ElementRef;
  @ViewChild('MessageId') MessageId : ElementRef;
  chatForm = this.fb.group({
    chatMessage: [''],
    chatName: ['']
  });

  constructor(private fb: FormBuilder, private chatService: ChatService) {
    this.chat = null;
  }

  getMessages() {
    this.chatService.getMessages().then(data => this.chat = data.result);
  }
  postMessages() {
    this.chatService.postMessage(this.chatName.nativeElement.value, this.chatMessage.nativeElement.value);
  }
  deleteMessage() {
    this.chatService.deleteMessage(this.MessageId.nativeElement.value);

  }
  updateMessage() {
    this.chatService.updateMessage(this.MessageId.nativeElement.value , this.chatMessage.nativeElement.value);
  }
}
