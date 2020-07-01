import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimerComponent} from './timer/timer.component';
import {PomodoroAppComponent} from './pomodoro-app/pomodoro-app.component';
import {TimerControlsComponent} from './timer-controls/timer-controls.component';
import {TimeCategoriesComponent} from './time-categories/time-categories.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    PomodoroAppComponent,
    TimerControlsComponent,
    TimeCategoriesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
