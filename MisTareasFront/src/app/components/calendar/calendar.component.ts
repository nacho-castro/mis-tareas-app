import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../../task.service';
import { MatCalendar, MatCalendarCellClassFunction, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatDatepickerModule, MatNativeDateModule, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;
  
  tasks: Task[] = [];
  taskDates = new Set<string>();//Save 'Dates' as Strings

  constructor(private taskService: TaskService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.taskService.getIncompleteTasks().subscribe(tasks => {
      this.taskDates = new Set(tasks.map(task => task.date)); //Save dates
      this.refreshCalendar();
    });
  }

  dateClass: MatCalendarCellClassFunction<Date> = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    const formattedDate = checkDate.toISOString().split('T')[0]; //'YYYY-MM-DD' Format 

    if (checkDate.getTime() === today.getTime()) {
      return 'today-highlight'; //Today
    }
    if (this.taskDates.has(formattedDate)) {
      return 'task-highlight'; //Tasks
    }
    return '';
  };

  private refreshCalendar(): void {
    if (this.calendar) {
      this.cdRef.detectChanges(); 
      this.calendar.updateTodaysDate();
    }
  }

}