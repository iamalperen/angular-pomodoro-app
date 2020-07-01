import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-time-categories',
  templateUrl: './time-categories.component.html',
  styleUrls: ['./time-categories.component.scss']
})
export class TimeCategoriesComponent implements OnInit {
  @Input() appStatus;
  @Output() timerControlEvent = new EventEmitter<string>();


  constructor() {
  }

  ngOnInit(): void {
  }

  clickEvent(timerCategory) {
    this.timerControlEvent.emit(timerCategory);
  }

}
