import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-corner1',
  templateUrl: './corner1.component.html',
  styleUrls: ['./corner1.component.css']
})
export class Corner1Component implements OnInit {
  @Input() receivedParentMessage: string;

  @Output() messageToEmit = new EventEmitter<string>();

  messageToSendC: string = "Hello Parent !";
  constructor() { }

  ngOnInit(): void {

  }
  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message)
  }
}
