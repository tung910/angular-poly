import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  loggedInUser: BehaviorSubject<any> = new BehaviorSubject(
    JSON.parse(localStorage.getItem('user') || '{}')
  );
  constructor(private http: HttpClient) {}
  getUser() {
    return this.loggedInUser.value;
  }

  signUp(data: IUser) {
    return this.http.post(environment.user_api + '/signup', data);
  }
  signIn(data: IUser) {
    return this.http.post(environment.base_API_URL + '/signin', data).pipe(
      map((data: any) => {
        if (data) {
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
          this.loggedInUser.next(data.user);
        }
        return null;
      })
    );
  }
}
