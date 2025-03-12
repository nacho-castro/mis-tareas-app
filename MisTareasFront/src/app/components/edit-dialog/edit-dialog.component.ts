import { Component, Inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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
import { SubjectService } from '../../subject.service';

interface Subject {
  value: string;
  viewValue: string;
}

interface Task {
  id: number,
  title: string;
  subject: string;
  date: string;
}

@Component({
  selector: 'app-edit-dialog',
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
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css'
})
export class EditDialogComponent {
  editTask: Task;
  subjects: Subject[] = []

  constructor(
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private taskService: TaskService,
    private subjectService: SubjectService,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {
    if (!data || !data.id) {
      console.error('Error: No se recibió una tarea válida para editar.');
      this.closeDialog();
    }
    this.editTask = { ...data };
   }

   ngOnInit() {
    this.subjectService.getSubjects().subscribe((data) => {
      this.subjects = data;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveTask() {
    if (!this.editTask.id) {
      alert('Error: La tarea no tiene un ID válido.');
      return;
    }

    this.taskService.updateTask(this.editTask).subscribe({
      next: () => {
        alert('TAREA EDITADA');
        this.dialogRef.close(this.editTask);
      },
      error: (error) => {
        console.error('Error al editar la tarea', error);
        alert('ERROR al editar la tarea');
      }
    });
  }
}
