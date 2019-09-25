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
  {
    path: '',
    redirectTo: '/(task:task//list:list//completed:completed//stats:stats//settings:settings)',
    pathMatch: 'full'
  },
  { path: 'task', component: TaskFormComponent, outlet: 'task' },
  { path: 'list', component: TaskListComponent, outlet: 'list' },
  { path: 'completed', component: CompletedTaskComponent, outlet: 'completed' },
  { path: 'stats', component: StatsComponent, outlet: 'stats' },
  { path: 'settings', component: SettingsComponent, outlet: 'settings' }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
