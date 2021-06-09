import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  public unique_key: number;
  public parentRef: ChildComponent;
  constructor() { }

  ngOnInit(): void {
  }
  remove_y() {
    console.log(this.unique_key)
    this.parentRef.remove(this.unique_key)
  }
}
