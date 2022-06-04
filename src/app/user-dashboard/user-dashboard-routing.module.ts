import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { DashboardComponent } from './shell/dashboard/dashboard.component';
import { CreateComponent } from './shell/create/create.component';
import { UpdateComponent } from './shell/update/update.component';
import { DeleteComponent } from './shell/delete/delete.component';
import { ViewNoteComponent } from './shell/view-note/view-note.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'update/:id',
        component: UpdateComponent,
      },
      {
        path: 'view-note/:id',
        component: ViewNoteComponent,
      },
      {
        path: 'delete/:id',
        component: DeleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardRoutingModule {}
