# MisTareas - Frontend in Angular 17 with Firebase

This project is a frontend of a **ToDoList** application developed in **Angular 17**, which interacts with **Firebase** to manage the database. It allows CRUD operations on Tasks (create, read, update and delete). The application is structured into three main components:

1. **My Tasks**: Displays a list of pending tasks.
2. **My Calendar**: Shows tasks in a calendar view, with color coding for different statuses.
3. **My Completed Tasks**: Displays tasks that have been marked as completed.

## Technologies Used

- **Angular 17**: Main framework for frontend development.
- **Firebase**: Used for hosting the frontend and static content.
- **Spring Boot**: Backend API handling CRUD operations for tasks.
- **Render**: Hosting service for the Spring Boot backend.

## Service Methods (task.service.ts)

The `TaskService` provides methods to interact with the backend API (deployed on Render). It handles all the CRUD operations for tasks:

```typescript
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
    return this.http.put<void>(`${this.apiUrl}/${id}`, {});
  }

  //DELETE: Delete Task
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
