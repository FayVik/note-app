import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ShellComponent } from './shell/shell.component';
import { DashboardComponent } from './shell/dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { CreateComponent } from './shell/create/create.component';
import { DeleteComponent } from './shell/delete/delete.component';
import { UpdateComponent } from './shell/update/update.component';
import { ViewNoteComponent } from './shell/view-note/view-note.component';

@NgModule({
  declarations: [
    ShellComponent,
    DashboardComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    ViewNoteComponent,
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    MatTableModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserDashboardModule {}
