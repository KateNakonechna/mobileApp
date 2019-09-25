import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { TaskFormComponent } from '~/app/tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { StatsComponent } from './tasks/stats/stats.component';
import { SettingsComponent } from './tasks/settings/settings.component';
import { CompletedTaskComponent } from './tasks/completed-task/completed-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/task', pathMatch: 'full' },
  { path: 'task', component: TaskFormComponent },
  { path: 'list', component: TaskListComponent },
  { path: 'list/:id', component: TaskItemComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'completed', component: CompletedTaskComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
