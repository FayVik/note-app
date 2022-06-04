import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { signupData } from '../../../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public error: any;
  public signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.required]),
    lastName: new FormControl('', [Validators.required, Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
  });

  hide = true;
  message: any;

  constructor(private http: ServiceService, private router: Router) {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.signUpForm.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.signUpForm.controls['email'].hasError('email')
      ? 'Not a valid email'
      : '';
  }

  signUp(): void {
    if (this.signUpForm.valid) {
      const formData = {
        first_name: this.signUpForm.get('firstName')?.value,
        last_name: this.signUpForm.get('lastName')?.value,
        email: this.signUpForm.get('email')?.value,
        password: this.signUpForm.get('password')?.value,
      } as signupData;
      this.http.createUser(formData).subscribe(
        (res) => {
          this.message = res.message;
          if (this.message === 'User Account Created') {
            this.router.navigate(['/user/auth/sign-in']);
          }
          console.log(res);
        },
        (error) => {
          this.error = error.data;
        }
      );
    }
  }
}
