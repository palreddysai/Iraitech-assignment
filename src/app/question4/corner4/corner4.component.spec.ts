import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corner4Component } from './corner4.component';

describe('Corner4Component', () => {
  let component: Corner4Component;
  let fixture: ComponentFixture<Corner4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Corner4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Corner4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
