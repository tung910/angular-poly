import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
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
  subjectId: any;
  constructor(
    private router: ActivatedRoute,
    private questionsService: QuestionsService,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id') || 0;
    if (id == 0) {
      return;
    }
    this.subjectId = id;
    this.questionsService.getQuestionBySubject(+id).subscribe((data) => {
      Object.assign(this.question, data);
      return;
    });
  }

  confirm(id: string): void {
    this.questionsService.remove(id).subscribe(
      () => {
        this.nzMessageService.success('Xoa thanh cong');
        this.ngOnInit();
      },
      () => this.nzMessageService.error('Khong the xoa!')
    );
  }
}
