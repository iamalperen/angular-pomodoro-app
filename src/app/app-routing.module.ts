import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PomodoroAppComponent} from './pomodoro-app/pomodoro-app.component';


const routes: Routes = [
  {
    path: '**',
    component: PomodoroAppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
