import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Isubject from '../models/subject';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}
  create(data: any) {
    return this.http.post(environment.question_api, data);
  }
  remove(id: string) {
    return this.http.delete(`${environment.question_api}/${id}`);
  }

  updateData(data: any) {
    return this.http.patch(`${environment.question_api}/${data.id}`, data);
  }
  getQuestion(id: number) {
    return this.http.get(`${environment.question_api}/${id}`);
  }
  getQuestionBySubject(id: number): Observable<Isubject> {
    return this.http.get<Isubject>(
      `${environment.subject_api}/${id}?_embed=questions`
    );
  }
}
