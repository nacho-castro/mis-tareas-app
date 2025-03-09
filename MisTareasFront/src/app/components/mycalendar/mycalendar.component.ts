import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-mycalendar',
  standalone: true,
  imports: [
    CommonModule,
    CalendarComponent
],
  templateUrl: './mycalendar.component.html',
  styleUrl: './mycalendar.component.css'
})
export class MycalendarComponent {
}
