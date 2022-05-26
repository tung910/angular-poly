import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  answers = [
    {
      id: this.getRandomId(),
      text: '',
      status: false,
    },
    {
      id: this.getRandomId(),
      text: '',
      status: false,
    },
    {
      id: this.getRandomId(),
      text: '',
      status: false,
    },
  ];

  question = {
    subjectId: 1,
    quizz: '',
    answers: this.answers,
  };

  constructor() {}

  ngOnInit(): void {}
  getRandomId() {
    return Math.floor(Math.random() * 9 + 1);
  }
  addBox() {
    this.answers.push({
      id: this.getRandomId(),
      text: '',
      status: false,
    });
  }
  handleOnSubmit() {
    console.log('submited');
    console.log(this.question);
  }
}
