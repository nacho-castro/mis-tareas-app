import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-add-task-button',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './add-task-button.component.html',
  styleUrl: './add-task-button.component.css'
})
export class AddTaskButtonComponent {
  constructor(private matDialog: MatDialog) { }

  openAddTaskDialog(){
      this.matDialog.open(AddDialogComponent,{width:'400px',height:'480px'});
  }
}
