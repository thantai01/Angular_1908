import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playlist2308Component } from './playlist2308.component';

describe('Playlist2308Component', () => {
  let component: Playlist2308Component;
  let fixture: ComponentFixture<Playlist2308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Playlist2308Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Playlist2308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
