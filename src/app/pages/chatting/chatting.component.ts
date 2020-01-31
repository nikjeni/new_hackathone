import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.scss']
})
export class ChattingComponent implements OnInit {
  //socket: SocketIOClient.Socket;
  //Query DOM
  message;
  handle;
  btn;
  output;
  feedback;
  count = 0;

  constructor() {
    //this.socket = io.connect();
  }

  ngOnInit() {
    this.message = document.querySelector("#message");
    this.handle = document.querySelector("#handle");
    this.btn = document.querySelector("#send");
    this.output = document.querySelector("#output");
    this.feedback = document.querySelector("#feedback");

    //Emit event
    // btn.addEventListener("click", function () {
    //   socket.emit('chat', {
    //       handle: handle.value,
    //       message: message.value
    //   });
    //   message.value = "";
    // });

    // document.addEventListener("visibilitychange", () => {
    //   if (!document.hidden) {
    //       document.title = "Nikhil Gavali's Chat App";
    //       count = 0;
    //   }
    // })

    // clearButton.addEventListener("click", function () {
    //     output.innerHTML = "";
    //     feedback.innerHTML = "";
    //     message.value = "";
    //     document.title = "Nikhil Gavali's Chat App";
    //     count = 0;
    // })

    // message.addEventListener("keypress", function (e) {
    //   socket.emit("typing", handle.value);
    //   var key = e.which || e.keyCode;
    //   if (key === 13) {
    //       socket.emit('chat', {
    //           handle: handle.value,
    //           message: message.value
    //       });
    //       message.value = "";
    //   }
    // });

    // //Listen event
    // socket.on("chat", function (data) {
    //   if (document.hidden) {
    //       count++;
    //       var newTitle = '(' + count + ')';
    //       document.title = newTitle;
    //   } else {
    //       document.title = "Nikhil Gavali's Chat App";
    //       count = 0;
    //   }
    //   output.innerHTML += "<p><strong>" + data.handle + ":</strong>" + data.message + "</p>";
    //   output.scrollIntoView(false);
    //   feedback.innerHTML = "";
    // });

    // socket.on("typing", function (data) {
    //   feedback.innerHTML = "<p> <em>" + data + " is typing a message... </em> </p>";
    // });
  }

}
