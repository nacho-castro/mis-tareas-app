import { Component, Input } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es'; //Import locale Spanish
import { registerLocaleData } from '@angular/common';
import { TaskService } from '../../task.service';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  constructor(
    private datePipe: DatePipe,
    private taskService: TaskService
  ) { }

  @Input() task: any;

  completeTask(task:any):void {
    const updatedTask = { ...task, completed: !task.completed }; 

    this.taskService.completeTask(task.id).subscribe({
      next: () => {
        console.log('Tarea actualizada correctamente');
        task.completed = updatedTask.completed;
      },
      error: (err) => {
        console.error('Error al actualizar la tarea!', err);
      }
    });
  }
}
