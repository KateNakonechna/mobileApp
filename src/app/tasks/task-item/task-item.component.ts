import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TaskService } from './../task.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { ITask } from '~/app/tasks/interfaces/task.interface';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'ns-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, OnDestroy {
  tasks!: ITask[];
  task: ITask | undefined;
  progressValue = 0;

  private unsubscribe: Subject<void> = new Subject();

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: RouterExtensions) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.taskService.tasks$.pipe(takeUntil(this.unsubscribe)).subscribe(tasks => (this.tasks = tasks));
    this.task = this.getItem(id);
  }

  getItem(id: number) {
    return this.tasks.find(item => item.id === id);
  }

  addProgress(task: ITask) {
    this.progressValue += 20;
    if (this.progressValue === 100) {
      this.taskService.addToCompletedTask(task.id);
      this.router.navigate(['/completed'], { clearHistory: true });
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
