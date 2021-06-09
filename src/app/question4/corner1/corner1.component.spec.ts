import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corner1Component } from './corner1.component';

describe('Corner1Component', () => {
  let component: Corner1Component;
  let fixture: ComponentFixture<Corner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Corner1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Corner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
