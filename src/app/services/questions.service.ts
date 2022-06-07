import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}
  create(data: any) {
    return this.http.post(environment.question_api, data);
  }
  updateData(data: any) {
    return this.http.patch(`${environment.question_api}/${data.id}`, data);
  }
  getQuestion(id: number) {
    return this.http.get(`${environment.question_api}/${id}`);
  }
  getQuestionBySubject(id: number) {
    return this.http.get(`${environment.subject_api}/${id}?_embed=questions`);
  }
}
