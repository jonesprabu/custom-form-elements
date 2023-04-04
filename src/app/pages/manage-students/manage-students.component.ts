import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/students/student.model';
import { Observable } from 'rxjs';
import { ManageStudentsService } from 'src/app/services/manage-students.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.scss']
})
export class ManageStudentsComponent implements OnInit {
  students$: Observable<Student[]>;

  manageStudentsForm = this.fb.group({
    firstName: new FormControl('', [Validators.required,]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    doj: new FormControl('', [Validators.required])
  });

  constructor(private fb: FormBuilder, private studentService: ManageStudentsService) {
    this.students$ = this.studentService.students$;
  }

  ngOnInit(){
    this.studentService.getStudentsList();
    this.manageStudentsForm.setValue({
      firstName: 'Test',
      lastName: 'Test1',
      email: 't',
      gender: 'M',
      dob: '',
      doj: ''
    });
  }

  onSubmit() {
    // console.warn(JSON.stringify(this.manageStudentsForm.value));
    alert(JSON.stringify(this.manageStudentsForm.getRawValue()));
    const newStudent = this.manageStudentsForm.value as Partial<Student>;
    //this.studentService.createStudent(newStudent);
  }
}
