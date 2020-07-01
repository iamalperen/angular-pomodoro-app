import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {repeatWhen, take, takeUntil, takeWhile} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('progressBar') progressBar: ElementRef;
  @Input() timerControlAction: string;
  @Output() completedTimer = new EventEmitter();

  private timer$;
  private time = 25; // initial timer amount in minutes
  private get timerStartValue() {
    return this.time * 60; // seconds
  }

  private currentTimer = 'pomodoro';
  private timerRemaining = this.timerStartValue;
  private start$ = new Subject();
  private stop$ = new Subject();
  private readonly pageTitle;

  constructor(private titleService: Title) {
    this.pageTitle = this.titleService.getTitle();

    this.timer$ = interval(1000).pipe(
      takeUntil(this.stop$),
      takeWhile(v => v >= 0),
      repeatWhen(() => this.start$)
    ); // 1 second interval
  }

  ngOnInit() {

    this.timer$.subscribe((val) => {
      this.timerRemaining -= 1; // countdown 1 by 1
      const percentage = ((this.timerStartValue - this.timerRemaining) / this.timerStartValue) * 100;
      this.progressBar.nativeElement.style.width = percentage + '%';
      this.titleService.setTitle(this.formatLeftTime() + ' | ' + this.pageTitle);
      if (percentage === 100) {
        this.completeTimer();
      }
    });

    this.stop(); // initially stop
  }

  private completeTimer() {
    this.playAudio();
    this.updateStats();
    this.stop();
  }

  ngAfterViewInit() {
    this.progressBar.nativeElement.style.width = '0%';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.timerControlAction.currentValue === 'start') {
      this.start();
    } else if (changes.timerControlAction.currentValue === 'pause') {
      this.stop();
    } else if (changes.timerControlAction.currentValue === 'restart') {
      this.restart();
    } else if (changes.timerControlAction.currentValue === 'pomodoro') {
      this.setPomodoroTimer();
    } else if (changes.timerControlAction.currentValue === 'short-break') {
      this.setShortBreakTimer();
    } else if (changes.timerControlAction.currentValue === 'long-break') {
      this.setLongBreakTimer();
    }
  }

  private start() {
    this.start$.next();
  }

  private stop() {
    this.stop$.next();
  }

  private restart() {
    this.stop();
    this.timerRemaining = this.timerStartValue;
    this.progressBar.nativeElement.style.width = 0 + '%';
  }

  private playAudio() {
    const audio = new Audio('assets/bell.mp3');
    audio.play();
  }

  public formatLeftTime() {
    return new Date(this.timerRemaining * 1000).toISOString().substr(14, 5); // mm:ss format
  }

  private setPomodoroTimer() {
    this.setTimer('pomodoro', 25);
  }

  private setShortBreakTimer() {
    this.setTimer('short-break', 5);
  }

  private setLongBreakTimer() {
    this.setTimer('long-break', 10);
  }

  private setTimer(timerType, time) {
    this.time = time;
    this.timerRemaining = this.timerStartValue;
    this.currentTimer = timerType;
    this.restart();
  }

  private updateStats() {
    this.completedTimer.emit(this.currentTimer);
  }
}
