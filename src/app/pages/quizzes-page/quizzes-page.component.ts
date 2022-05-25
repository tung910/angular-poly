import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quizzes-page',
  templateUrl: './quizzes-page.component.html',
  styleUrls: ['./quizzes-page.component.scss'],
})
export class QuizzesPageComponent implements OnInit {
  players: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  handePayler(name: NgForm) {
    if (name.value && name.value != '') {
      this.players = name.value.userName;
    }
  }
}
