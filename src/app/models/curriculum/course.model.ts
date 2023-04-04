import { Faculty } from '../staffs/faculty.model';
import { Student } from '../students/student.model';
import { Batch } from './batch.model';
import { Department } from './department.model';

export interface Course {
  id: number;
  courseId: string;
  name: string;
  department: Department;
  facultyInCharge: Faculty;
  students: Student[];
}
