import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { QuestionsService } from 'src/app/services/questions.service';
@Component({
  selector: 'app-quizzes-page',
  templateUrl: './quizzes-page.component.html',
  styleUrls: ['./quizzes-page.component.scss'],
})
export class QuizzesPageComponent implements OnInit {
  players: string | null = null;
  public data: any;
  public currentQuiz: number = 0;
  correct$ = new BehaviorSubject<number>(0);
  inCorrect$ = new BehaviorSubject<number>(0);
  complete$ = new BehaviorSubject<boolean>(false);
  constructor(
    private activatedRoute: ActivatedRoute,
    private questionsService: QuestionsService,
    private router: Router
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('slug') || 0;
    if (id <= 0) return;
    this.questionsService.getQuestionBySubject(+id).subscribe((data) => {
      this.data = data;
    });
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user') || null;
    if (user) {
      return (this.players = JSON.parse(user).userName);
    }
  }

  handlerPlayer(name: NgForm) {
    if (name.value && name.value != '') {
      this.players = name.value.userName;
    }
  }
  onAnswer(option: boolean) {
    if (option) {
      setTimeout(() => {
        this.currentQuiz++;
        this.correct$.next(this.correct$.getValue() + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuiz++;
        this.inCorrect$.next(this.inCorrect$.getValue() + 1);
      }, 1000);
    }
  }
}
