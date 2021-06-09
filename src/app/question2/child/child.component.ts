import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Question2Component } from '../question2/question2.component';

import{ Child2Component} from '../child2/child2.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public unique_key: number;
  public parentRef: Question2Component;


  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;
  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<Child2Component>>()
  constructor(private CFR: ComponentFactoryResolver) { }
  createComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(Child2Component);

    let child2ComponentRef = this.VCR.createComponent(componentFactory);

    let child2Component = child2ComponentRef.instance;
    child2Component.unique_key = ++this.child_unique_key;
    child2Component.parentRef = this;

    // add reference for newly created component
    this.componentsReferences.push(child2ComponentRef);
  }
  remove(key: number) {
    if (this.VCR.length < 1) return;

    let componentRef = this.componentsReferences.filter(
      x => x.instance.unique_key == key
    )[0];

    let vcrIndex: number = this.VCR.indexOf(componentRef.hostView);

    // removing component from container
    this.VCR.remove(vcrIndex);

    // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      x => x.instance.unique_key !== key
    );
  }
  ngOnInit(): void {
  }

  remove_x() {
    console.log(this.unique_key)
    this.parentRef.remove(this.unique_key)
  }
}
/*

  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;
  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<ChildComponent>>()
  constructor(private CFR: ComponentFactoryResolver) { }
  createComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(ChildComponent);

    let childComponentRef = this.VCR.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;
    childComponent.unique_key = ++this.child_unique_key;
    childComponent.parentRef = this;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }
  remove(key: number) {
    if (this.VCR.length < 1) return;

    let componentRef = this.componentsReferences.filter(
      x => x.instance.unique_key == key
    )[0];

    let vcrIndex: number = this.VCR.indexOf(componentRef.hostView);

    // removing component from container
    this.VCR.remove(vcrIndex);

    // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      x => x.instance.unique_key !== key
    );
  }
  ngOnInit(): void {
  }
*/
