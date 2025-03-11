import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { TaskComponent } from "../task/task.component";
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-taskslist',
  standalone: true,
  imports: [TaskComponent,CommonModule],
  templateUrl: './taskslist.component.html',
  styleUrl: './taskslist.component.css'
})
export class TaskslistComponent implements OnInit{
  tasks: any[] = [];//Tasks List

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();//Get Tasks from the API
  }

  getTasks(): void {
    this.taskService.getIncompleteTasks().subscribe(
      (data) => {
        this.tasks = data;//Assign tasks
      },
      (error) => {
        console.error('Error al obtener las tareas', error);
      }
    );
  }

  onTaskDeleted(): void {
    this.getTasks();
  }
  
  onTaskCompleted(): void {
    this.getTasks();
  }
}
