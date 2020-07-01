import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroAppComponent } from './pomodoro-app.component';

describe('PomodoroAppComponent', () => {
  let component: PomodoroAppComponent;
  let fixture: ComponentFixture<PomodoroAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
