import { Component } from '@angular/core';
import { TaskslistComponent } from "../taskslist/taskslist.component";
import { AddTaskButtonComponent } from "../add-task-button/add-task-button.component";

@Component({
  selector: 'app-mytasks',
  standalone: true,
  imports: [TaskslistComponent, AddTaskButtonComponent],
  templateUrl: './mytasks.component.html',
  styleUrl: './mytasks.component.css'
})
export class MytasksComponent {

}
