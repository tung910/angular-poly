import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Isubject from '../models/subject';

@Injectable({
    providedIn: 'root'
})
export class SubjectsService {

    constructor(private http: HttpClient) { }
    getSubject(): Observable<Isubject[]> {
        return this.http.get<Isubject[]>(environment.subject_api)
    }
}
