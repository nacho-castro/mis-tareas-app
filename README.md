# MisTareas - Full Application (Frontend and Backend)

This project is a **ToDoList** application consisting of two main parts:

1. **Frontend**: Developed with **Angular 17** and hosted on **Firebase**.
2. **Backend**: Built with **Spring Boot** to handle CRUD operations for tasks, deployed on **Render**.

The app allows users to manage tasks with CRUD operations and provides three main views: a list of pending tasks, a calendar view, and a list of completed tasks.

## Technologies Used

### Frontend

- **Angular 17**: Main framework for frontend development. Angular handles the user interface and interaction with the backend API.
- **Firebase**: Used to host the frontend of the app and static content.

### Backend

- **Spring Boot**: The backend API is built using Spring Boot. It handles CRUD operations for tasks, including creating, retrieving, updating, and deleting tasks.
- **Render**: Hosting service used to deploy the Spring Boot backend.

## Project Structure

### Frontend

The frontend consists of an **Angular 17** application with components to manage tasks.

- **Components**:
  - **mytasks**: Displays tasks that are pending.
  - **mycalendar**: Shows tasks in a calendar view with color-coded tasks.
  - **mycompleted**: Displays tasks that have been marked as completed.

- **Services**:
  - **TaskService**: Communicates with the backend API to manage tasks.

### Backend

The backend is a **Spring Boot** application with a simple REST API that interacts with the database. The API is deployed on **Render** and provides the following endpoints:

### API Endpoints

- **GET /tasks**: Retrieves all pending tasks.
- **GET /tasks/completed**: Retrieves all completed tasks.
- **POST /tasks**: Creates a new task by sending a JSON body with the task details (e.g., title, date).
- **PUT /tasks/{id}/complete**: Marks a task as completed by ID.
- **PUT /tasks**: Updates an existing task by sending a JSON body with the task details.
- **DELETE /tasks/{id}**: Deletes a task by ID.