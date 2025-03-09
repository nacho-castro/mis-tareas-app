import { Component } from '@angular/core';
import { CompletedlistComponent } from "../completedlist/completedlist.component";

@Component({
  selector: 'app-mycompleted',
  standalone: true,
  imports: [CompletedlistComponent],
  templateUrl: './mycompleted.component.html',
  styleUrl: './mycompleted.component.css'
})
export class MycompletedComponent {
}
