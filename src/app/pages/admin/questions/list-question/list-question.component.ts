import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.scss'],
})
export class ListQuestionComponent implements OnInit {
  question: any = {
    active: true,
    disabled: false,
  };
  constructor(
    private router: ActivatedRoute,
    private questionsService: QuestionsService
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id') || 0;
    if (id == 0) {
      // return router.
    }
    this.questionsService.getQuestion(+id).subscribe((data) => {
      Object.assign(this.question, data);
      console.log(this.question);
      return;
    });
  }
}
