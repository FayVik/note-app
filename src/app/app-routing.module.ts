import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./auth-page/auth-page.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'user-dashboard',
    loadChildren: () =>
      import('./user-dashboard/user-dashboard.module').then(
        (m) => m.UserDashboardModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
