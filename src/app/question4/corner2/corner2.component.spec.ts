import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corner2Component } from './corner2.component';

describe('Corner2Component', () => {
  let component: Corner2Component;
  let fixture: ComponentFixture<Corner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Corner2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Corner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
