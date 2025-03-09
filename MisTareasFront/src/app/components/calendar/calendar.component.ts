import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { MatCalendarCellCssClasses, MatDatepickerModule } from '@angular/material/datepicker';
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
  tasks: Task[] = [];
  taskDates = new Set<string>();//Save dates as Strings

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getIncompleteTasks().subscribe(tasks => {
      this.taskDates = new Set(tasks.map(task => task.date)); //Save dates
    });
  }

  dateClass(date: Date): MatCalendarCellCssClasses {
    if (!this.taskDates || this.taskDates.size === 0) return ''; // Manejo de error

    const formattedDate = date.toISOString().split('T')[0]; // Convertimos la fecha seleccionada a 'YYYY-MM-DD'
    const isHighlighted = this.taskDates.has(formattedDate);
    return isHighlighted ? 'special-date' : '';
  }
}