import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiobarComponent } from './audiobar.component';

describe('AudiobarComponent', () => {
  let component: AudiobarComponent;
  let fixture: ComponentFixture<AudiobarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiobarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
