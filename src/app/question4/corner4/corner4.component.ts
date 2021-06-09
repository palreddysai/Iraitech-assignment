import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corner4',
  templateUrl: './corner4.component.html',
  styleUrls: ['./corner4.component.css']
})
export class Corner4Component implements OnInit {
  @Input() receivedParentMessage: string;
  constructor() { }

  ngOnInit(): void {
  }

}
