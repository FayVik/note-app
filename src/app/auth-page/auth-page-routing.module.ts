import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './shell/sign-in/sign-in.component';
import { SignUpComponent } from './shell/sign-up/sign-up.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: 'auth',
    component: ShellComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
