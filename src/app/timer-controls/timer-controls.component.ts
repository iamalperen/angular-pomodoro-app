import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.scss']
})
export class TimerControlsComponent implements OnInit {
  @Output() timerControlEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickEvent(action) {
    this.timerControlEvent.emit(action);
  }
}
