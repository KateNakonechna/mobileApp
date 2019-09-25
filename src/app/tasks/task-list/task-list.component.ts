import { Component, OnInit, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { TaskService } from './../task.service';
import { filter, map } from 'rxjs/operators';
import { ITask } from '~/app/tasks/interfaces/task.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'ns-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  items: Observable<ITask[]> = this.taskService.tasks$;

  constructor(private taskService: TaskService) {}

  delete(id: number) {
    this.taskService.deleteTask(id);
  }
}
