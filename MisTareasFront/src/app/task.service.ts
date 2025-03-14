import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://mis-tareas-app.onrender.com/tasks';

  constructor(private http: HttpClient) { }

  //GET: Incomplete Tasks
  getIncompleteTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  //GET: Completed Tasks
  getCompletedTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/completed`);
  }

  //POST: Create Task
  createTask(task: Task): Observable<void> {
    return this.http.post<void>(this.apiUrl, task);
  }

  //PUT: Toggle Task completed
  completeTask(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/complete`, {});
  }

  //PUT: Edit Task
  updateTask(task: Task): Observable<Task> {
    if (!task.id) {
      throw new Error('El ID de la tarea es obligatorio para actualizarla.');
    }
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }

  //DELETE
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
