import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.scss']
})
export class ChattingComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    window.open('http:\\localhost:3000\index.html');
  }

}
