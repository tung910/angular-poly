import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { login } from './login.action';
import { loginSelector } from './login.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user$: Observable<any> | undefined;
  constructor(private _store: Store<any>) {}

  ngOnInit(): void {
    this.user$ = this._store.pipe(select(loginSelector));
  }
  handlerSubmit($event: any) {
    this._store.dispatch(login({ ...$event.value }));
  }
}
