import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Isubject from '../models/subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  constructor(private http: HttpClient) {}
  getSubject(): Observable<Isubject[]> {
    return this.http.get<Isubject[]>(environment.subject_api);
  }
  updateSubject(data: Isubject) {
    const body = {
      name: data.name,
      icon: data.icon,
      slug: data.slug,
    };
    return this.http.put(`${environment.subject_api}/${data.id}`, body);
  }
  createSubject(data: Isubject) {
    const body = {
      name: data.name,
      icon: data.icon,
      slug: data.slug,
    };
    return this.http.post(environment.subject_api, body);
  }

  deleteSubject(id: number) {
    return this.http.delete(`${environment.subject_api}/${id}`);
  }
}
