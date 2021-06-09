import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corner3Component } from './corner3.component';

describe('Corner3Component', () => {
  let component: Corner3Component;
  let fixture: ComponentFixture<Corner3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Corner3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Corner3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
