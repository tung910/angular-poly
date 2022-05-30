import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    const loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (loggedInUser.role == undefined || +loggedInUser.role != 1) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
