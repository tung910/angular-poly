import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private mess: NzMessageService) {}
  canActivate() {
    const loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (loggedInUser.email == undefined || loggedInUser.email == '') {
      this.mess.error('Ban phai dang nhap');
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
