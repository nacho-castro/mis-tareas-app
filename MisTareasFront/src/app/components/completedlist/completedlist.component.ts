import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { CommonModule } from '@angular/common';
import { TaskComponent } from "../task/task.component"; 

@Component({
  selector: 'app-completedlist',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './completedlist.component.html',
  styleUrl: './completedlist.component.css'
})
export class CompletedlistComponent {
  tasks: any[] = [];//Tasks List

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();//Get Tasks from the API
  }

  getTasks(): void {
    this.taskService.getCompletedTasks().subscribe(
      (data) => {
        this.tasks = data;//Assign tasks
      },
      (error) => {
        console.error('Error al obtener las tareas', error);
      }
    );
  }
}
