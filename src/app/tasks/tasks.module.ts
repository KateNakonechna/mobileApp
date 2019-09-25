import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { NativeScriptFormsModule } from 'nativescript-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { StatsComponent } from './stats/stats.component';
import { SettingsComponent } from './settings/settings.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { DropDownModule } from 'nativescript-drop-down/angular';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUIChartModule } from 'nativescript-ui-chart/angular';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent,
    StatsComponent,
    SettingsComponent,
    CompletedTaskComponent
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptUIChartModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    DropDownModule,
    SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TasksModule {}
