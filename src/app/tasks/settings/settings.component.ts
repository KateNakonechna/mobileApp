import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  form: FormGroup = new FormGroup({
    category: new FormControl(null, {
      validators: [Validators.required]
    })
  });

  constructor(private router: RouterExtensions, private taskService: TaskService) {}

  onSubmit() {
    this.taskService.addCategory(this.form.value.category);
    this.router.navigate(['/task'], { clearHistory: true });
  }
}
