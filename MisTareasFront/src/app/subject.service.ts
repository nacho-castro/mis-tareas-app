import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Subject {
  value: string;
  viewValue: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subjectsUrl = 'assets/subjects.json';

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectsUrl);
  }
}
