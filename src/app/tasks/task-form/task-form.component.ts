import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as app from 'tns-core-modules/application';
import { takeUntil } from 'rxjs/internal/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { TaskService } from './../task.service';

@Component({
  selector: 'ns-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    id: new FormControl(Date.now(), {
      validators: [Validators.required]
    }),
    task: new FormControl('', {
      validators: [Validators.required]
    }),
    priority: new FormControl('', {
      validators: [Validators.required]
    }),
    difficulty: new FormControl('', {
      validators: [Validators.required]
    }),
    category: new FormControl('', {
      validators: [Validators.required]
    })
  });

  taskControlIsValid = true;
  public items!: string[];
  private unsubscribe: Subject<void> = new Subject();

  constructor(private router: RouterExtensions, private page: Page, private taskService: TaskService) {}

  ngOnInit() {
    // this.form.get('task').statusChanges.subscribe(status => {
    //     this.taskControlIsValid = status === 'VALID';
    // });

    this.page.actionBarHidden = true;
    this.taskService.categories$.pipe(takeUntil(this.unsubscribe)).subscribe(categories => (this.items = categories));
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const categoryIndex = this.form.get('category').value;
    const category = this.items[categoryIndex];
    this.taskService.addTask({
      ...this.form.value,
      category,
      isCompleted: false
    });

    this.form.reset();
    this.taskControlIsValid = true;
    this.router.navigate(['/list'], { clearHistory: true });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
