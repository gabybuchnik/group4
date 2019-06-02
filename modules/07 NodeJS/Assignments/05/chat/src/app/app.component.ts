import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  @ViewChild('MessageId') MessageId: ElementRef;
  chatForm = this.fb.group({
    chatMessage: ['', Validators.required],
    chatName: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private chatService: ChatService) {
    this.chat = null;
  }

  getMessages() {
    this.chatService.getMessages().then(data => this.chat = data.result);
  }
  postMessages() {
    if (this.chatForm.valid) {
      this.chatService.postMessage(this.chatName.nativeElement.value, this.chatMessage.nativeElement.value);
    }
  }
  deleteMessage() {
    if (this.chatForm.valid) {
      this.chatService.deleteMessage(this.MessageId.nativeElement.value);
    }
  }
  updateMessage() {
    if (this.chatForm.valid) {
      this.chatService.updateMessage(this.MessageId.nativeElement.value, this.chatMessage.nativeElement.value);
    }
  }
}
