import { Component, Input } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es'; //Import locale Spanish
import { registerLocaleData } from '@angular/common';
import { TaskService } from '../../task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Task } from '../../models/task.model';

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
    private taskService: TaskService,
    private matDialog: MatDialog
  ) { }

  @Input() task: any;

  //Toggle Task completed
  completeTask(task: any): void {
    const updatedTask = { ...task, completed: !task.completed };

    this.taskService.completeTask(task.id).subscribe({
      next: () => {
        task.completed = updatedTask.completed;
      },
      error: (err) => {
        console.error('Error al completar la tarea!', err);
      }
    });
  }

  deleteTask(task: any): void {
    this.taskService.deleteTask(task.id).subscribe({
      next: () => {
        console.log('Tarea eliminada correctamente');
        alert('TAREA ELIMINADA');
      },
      error: (err) => {
        console.error('Error al eliminar la tarea!', err);
      }
    });
  }

  openEditTaskDialog(task:Task){
      this.matDialog.open(EditDialogComponent,{
        width:'400px',
        height:'480px',
        data: task
      });
  }

}
