import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/students/student.model';

import { BehaviorSubject, of, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ManageStudentsService {

  /**
   * Search appointment details subject of appointment state service
   */
  private readonly studentsSubject = new BehaviorSubject<Student[]>([]);
  readonly students$ = this.studentsSubject.asObservable();
  get students(): Student[] {
    return this.studentsSubject.getValue();
  }
  set students(students: Student[]) {
    this.studentsSubject.next(students);
  }

  constructor(private http: HttpClient) {

  }

  async getStudentsList() {
    const students$ = this.http.get<Student[]>(`${environment.api}/students`);
    this.students = await lastValueFrom(students$);
  }

  createStudent(student: Partial<Student>){
    this.http.post<Student>(`${environment.api}/students`, student);
  }

}
