import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '~/app/tasks/interfaces/task.interface';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  categories$ = new BehaviorSubject<any>(['Home', 'Job', 'Shopping']);
  private tasks = new BehaviorSubject<ITask[]>([
    {
      id: 1,
      task: 'Learn RxJs',
      category: 'Job',
      priority: 2,
      difficulty: 'Easy',
      isCompleted: false
    },
    {
      id: 2,
      task: 'todo list',
      category: 'rest',
      priority: 5,
      difficulty: 'Hard',
      isCompleted: false
    }
  ]);

  tasks$ = this.tasks.asObservable().pipe(map(items => items.filter(item => !item.isCompleted)));

  completedTask$ = new BehaviorSubject<any>([]);

  constructor() {}

  addCategory(newCategory: string) {
    this.categories$.next([...this.categories$.getValue(), newCategory]);
  }

  addTask(newTask: ITask) {
    this.tasks.next([...this.tasks.getValue(), newTask]);
  }

  deleteTask(id: number) {
    this.tasks.next([...this.tasks.getValue().filter(task => task.id !== id)]);
  }

  addToCompletedTask(taskId: number) {
    const arr = this.tasks.getValue().map(task => {
      if (taskId === task.id) {
        task.isCompleted = true;
      }

      return task;
    });

    this.completedTask$.next(arr);
  }
}
