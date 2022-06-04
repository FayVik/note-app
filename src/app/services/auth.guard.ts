import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserResponse } from '../service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userString =
      window.localStorage.getItem('auth.user') || '{"id": -1 }';
    const user = JSON.parse(userString) as UserResponse;
    const isAuthenticated = user.id !== -1;
    if (!isAuthenticated) {
      this.router.navigate(['']);
    }
    return isAuthenticated;
  }
}
