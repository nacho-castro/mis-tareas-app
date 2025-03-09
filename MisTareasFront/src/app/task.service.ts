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

  //DELETE
  completeTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
