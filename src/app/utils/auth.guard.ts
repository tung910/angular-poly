import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate() {
        const loggedInUser = JSON.parse(localStorage.getItem('login_user') || "{}");
        if (loggedInUser.email == undefined || loggedInUser.email == ""
            || loggedInUser.googleId == undefined || loggedInUser.googleId == "") {
            this.router.navigate(['home']);
            return false;
        }

        return true;
    }

}
