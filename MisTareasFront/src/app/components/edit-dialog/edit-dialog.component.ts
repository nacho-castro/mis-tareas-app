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
  subjects: Subject[] = [
    { value: 'HISTORIA', viewValue: 'HISTORIA🏺' },
    { value: 'GEOGRAFIA', viewValue: 'GEOGRAFIA🌍' },
    { value: 'BIOLOGIA', viewValue: 'BIOLOGIA🧬' },
    { value: 'FISICOQUIMICA', viewValue: 'FISICOQUIMICA🧪' },
    { value: 'MATEMATICA', viewValue: 'MATEMATICA🔢' },
    { value: 'PDL', viewValue: 'PDL📚' },
  ];

  constructor(
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {
    this.editTask = { ...data };
   }

  closeDialog() {
    this.dialogRef.close();
  }

  saveTask() {
    this.taskService.updateTask(this.editTask).subscribe({
      next: () => {
        alert('TAREA EDITADA');
        this.dialogRef.close(this.editTask);
        window.location.reload();
      },
      error: (error) => {
        console.error('Error al editar la tarea', error);
        alert('ERROR al editar la tarea');
      }
    });
  }
}
