import { Faculty } from "../staffs/faculty.model";
import { Student } from "../students/student.model";
import { Course } from "./course.model";
import { DepartmentNames } from "./department-names.enum";

export interface Department {
  id: number;
  name: DepartmentNames;
  courses: Course[];
  faculties: Faculty[];
  actingStudents: Student[];

}
