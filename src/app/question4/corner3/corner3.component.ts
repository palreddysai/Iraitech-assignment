import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corner3',
  templateUrl: './corner3.component.html',
  styleUrls: ['./corner3.component.css']
})
export class Corner3Component implements OnInit {
  @Input() receivedParentMessage: string;
  constructor() { }

  ngOnInit(): void {
  }

}
