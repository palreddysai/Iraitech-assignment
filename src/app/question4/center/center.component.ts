import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  messageToSendP: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  sendToChild(message: string) {
    this.messageToSendP = message;
  }

}
