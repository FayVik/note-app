import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { DashboardComponent } from './shell/dashboard/dashboard.component';
import { CreateComponent } from './shell/create/create.component';
import { UpdateComponent } from './shell/update/update.component';
import { DeleteComponent } from './shell/delete/delete.component';
import { ViewNoteComponent } from './shell/view-note/view-note.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'create',
        component: CreateComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'update/:id',
        component: UpdateComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'view-note/:id',
        component: ViewNoteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'delete/:id',
        component: DeleteComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardRoutingModule {}
