import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.scss']
})
export class ChattingComponent implements OnInit {
  message = "";
  handle = "";
  output = "";
  feedback = "";
  count = 0;
  user = "Nikhil"
  constructor(private socket: Socket) { }

  ngOnInit() {
    this.socket.on('chat', function (data) {
      document.querySelector("#output").innerHTML += "<p><strong>" + data.handle.bold() + ":</strong>" + data.message.fontcolor("red") + "</p>";
      document.querySelector("#output").scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      document.querySelector("#feedback").innerHTML = "";
    });

    this.socket.on("typing", function (data) {
      document.querySelector("#feedback").innerHTML = "<p> <em>" + data + " is typing a message... </em> </p>";
    })
  }

  sendMessage() {
    this.socket.emit('chat', {
      handle: this.handle,
      message: this.message
    });
    this.message = "";
  }

  enterMessage(event) {
    this.socket.emit("typing", this.handle);
    if (event.code == "Enter") {
      this.socket.emit('chat', {
        handle: this.handle,
        message: this.message
      });
      this.message = "";
    }
  }

  clearMessage() {
    document.querySelector("#feedback").innerHTML = "";
    document.querySelector("#output").innerHTML = "";
    this.message = "";
  }

}
