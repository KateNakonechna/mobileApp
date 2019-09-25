import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ns-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent {
  items: Observable<any> = this.taskService.completedTask$;

  constructor(private taskService: TaskService) {}
}
