import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timeline2208Component } from './timeline2208.component';

describe('Timeline2208Component', () => {
  let component: Timeline2208Component;
  let fixture: ComponentFixture<Timeline2208Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Timeline2208Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Timeline2208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
