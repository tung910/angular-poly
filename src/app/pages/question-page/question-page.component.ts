import { Component, OnInit } from '@angular/core';
import Isubject from 'src/app/models/subject';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
    selector: 'app-question-page',
    templateUrl: './question-page.component.html',
    styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
    subjects: Array<Isubject> = []
    constructor(private subjectsService: SubjectsService) {
        this.subjectsService.getSubject().subscribe(data => this.subjects = data);
    }

    ngOnInit(): void {
    }

}
