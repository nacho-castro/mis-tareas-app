import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../task.service';
import { FormsModule } from '@angular/forms';

interface Subject {
  value: string;
  viewValue: string;
}

interface Task {
  title: string;
  subject: string;
  date: string;
}

@Component({
  selector: 'app-add-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule],
  templateUrl: './add-dialog.component.html',
  styleUrl: './add-dialog.component.css'
})
export class AddDialogComponent {
  subjects: Subject[] = [
    { value: 'HISTORIA', viewValue: 'HISTORIA🏺' },
    { value: 'GEOGRAFIA', viewValue: 'GEOGRAFIA🌍' },
    { value: 'BIOLOGIA', viewValue: 'BIOLOGIA🧬' },
    { value: 'FISICOQUIMICA', viewValue: 'FISICOQUIMICA🧪' },
    { value: 'MATEMATICA', viewValue: 'MATEMATICA🔢' },
    { value: 'PDL', viewValue: 'PDL📚' },
  ];

  newTask: Task = { title: '', subject: '', date: '' };

  constructor(
    private dialogRef: MatDialogRef<AddDialogComponent>,
    private taskService: TaskService
  ) { }

  closeDialog() {
    this.dialogRef.close();
  }

  addTask() {
    this.taskService.createTask(this.newTask).subscribe({
      next: () => {
        alert('TAREA GUARDADA');
        this.closeDialog();
        window.location.reload();
      },
      error: (error) => {
        console.error('Error al guardar la tarea', error);
        alert('ERROR al guardar la tarea');
      }
    });
  }
}
