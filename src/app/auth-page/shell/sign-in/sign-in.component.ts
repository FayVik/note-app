import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { loginData } from '../../../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public error: any;
  public loginForm = new FormGroup({
    email: new FormControl('vivianemma98@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('1234567@', [
      Validators.required,
      Validators.maxLength(8),
    ]),
  });

  hide = true;
  message: any;

  constructor(private http: ServiceService, private router: Router) {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.loginForm.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginForm.controls['email'].hasError('email')
      ? 'Not a valid email'
      : '';
  }

  login(): void {
    if (this.loginForm.valid) {
      const formData = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      } as loginData;
      this.http.loginUser(formData).subscribe(
        (res) => {
          this.message = res[0].message;
          if (this.message === 'User Login Successful') {
            window.localStorage.setItem(
              'auth.user',
              JSON.stringify(res[0].data)
            );
            this.router.navigate(['/user-dashboard/dashboard']);
          }
        },
        (error) => {
          this.error = error.data;
        }
      );
    }
  }
}
