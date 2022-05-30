import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-layout-public',
  templateUrl: './layout-public.component.html',
  styleUrls: ['./layout-public.component.scss'],
})
export class LayoutPublicComponent implements OnInit {
  isUser: boolean = false;

  constructor(private nzMessageService: NzMessageService) {}

  ngOnInit(): any {
    const user: any = localStorage.getItem('user') || {};
    if (JSON.stringify(user) === '{}') {
      return (this.isUser = false);
    }
    this.nzMessageService.success('Hello, Welcome back!');
    return (this.isUser = true);
  }
  handlerLogin(data: boolean) {
    this.nzMessageService.success('Hello, Welcome back!');
    return (this.isUser = data);
  }
  handlerSignOut() {
    localStorage.clear();
    this.nzMessageService.success('Sign out success!');
    setTimeout(() => {
      return (this.isUser = false);
    }, 500);
  }
}
