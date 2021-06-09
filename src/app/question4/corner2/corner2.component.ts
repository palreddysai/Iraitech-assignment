import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corner2',
  templateUrl: './corner2.component.html',
  styleUrls: ['./corner2.component.css']
})
export class Corner2Component implements OnInit {

  @Input() receivedParentMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
