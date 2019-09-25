import { Component } from '@angular/core';
import { TaskService } from './../task.service';
import { ITask } from '~/app/tasks/interfaces/task.interface';
import { Observable } from 'rxjs';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  items: Observable<ITask[]> = this.taskService.tasks$;
  progressValue = 0;

  constructor(private taskService: TaskService, private router: Router) {}

  delete(id: number) {
    dialogs.confirm('Do you want delete this task?').then(result => {
      if (result) {
        this.taskService.deleteTask(id);
      }
    });
  }
}
