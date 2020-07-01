import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCategoriesComponent } from './time-categories.component';

describe('TimeCategoriesComponent', () => {
  let component: TimeCategoriesComponent;
  let fixture: ComponentFixture<TimeCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
