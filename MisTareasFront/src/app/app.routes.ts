import { Routes } from '@angular/router';
import { MytasksComponent } from './components/mytasks/mytasks.component';
import { MycalendarComponent } from './components/mycalendar/mycalendar.component';
import { MycompletedComponent } from './components/mycompleted/mycompleted.component';

export const routes: Routes = [
    { path: '', component: MytasksComponent }, 
    { path: 'mytasks', component: MytasksComponent }, 
    { path: 'calendar', component: MycalendarComponent }, 
    { path: 'completed', component: MycompletedComponent }, 
  ];