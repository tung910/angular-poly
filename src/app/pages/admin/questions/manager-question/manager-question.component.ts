import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-question',
  templateUrl: './manager-question.component.html',
  styleUrls: ['./manager-question.component.scss'],
})
export class ManagerQuestionComponent implements OnInit {
  answers = [{}];
  constructor() {}

  ngOnInit(): void {}
}
