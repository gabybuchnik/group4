import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() { }
  getMessages() {
    return fetch("http://localhost:8000").then(res => res.json());
  }
  postMessage(author: string, message: string) {
    const data = {
      Author: author,
      Message: message
    }
    fetch("http://localhost:8000/", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json()).then(data => console.log(data));
  }
  deleteMessage(messageId: string) {
    fetch("http://localhost:8000/?id=" + messageId, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
  }
  updateMessage(messageId: string, message: string) {
    fetch("http://localhost:8000/?id=" + messageId, {
      method: 'PUT',
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
  }
}
