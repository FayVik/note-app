import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPageRoutingModule } from './auth-page-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ShellComponent } from './shell/shell.component';
import { SignInComponent } from './shell/sign-in/sign-in.component';
import { SignUpComponent } from './shell/sign-up/sign-up.component';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShellComponent,
    SignInComponent,
    SignUpComponent,
    AuthCardComponent,
  ],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthPageModule {}
