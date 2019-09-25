import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [{ path: '', component: TaskFormComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class TaskRoutingModule {}
