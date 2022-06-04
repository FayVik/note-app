import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}

  public isAuth: boolean = false;

  ngOnInit(): void {
    const userString =
      window.localStorage.getItem('auth.user') || '{"id": -1 }';
    const user = JSON.parse(userString) as UserResponse;
    this.isAuth = user.id !== -1;
  }

  public logout() {
    window.localStorage.removeItem('auth.user');
    this.router.navigate(['']);
  }
}
