import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent implements OnInit {
  choice: boolean = false;
  choiceName: string = 'result';
  answers = [];

  question: any = {
    subjectId: 1,
    quiz: '',
    answers: this.answers,
  };

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private questionsService: QuestionsService,
    private location: Location
  ) {}
  handleBack() {
    return this.location.back();
  }

  ngOnInit(): void {
    const idSubject = this.activeRouter.snapshot.paramMap.get('id') || 0;
    if (idSubject && +idSubject == 0) {
      return this.location.back();
    }
    this.questionsService.getQuestion(+idSubject).subscribe((data) => {
      Object.assign(this.question, data);
    });
  }
  handleOnSubmit() {
    this.questionsService
      .updateData(this.question)
      .subscribe((data) => this.handleBack());
  }
}
