import { Genders } from '../common/genders.enum';
import { Attendance } from './attendance.model';
import { Course } from '../curriculum/course.model';
import { Department } from '../curriculum/department.model';
import { Parent } from '../parents/parent.model';

export interface Student {
  id: number;
  rollNumber: string;
  firstName: string;
  lastName: string;
  gender: Genders;
  dob: Date;
  doj: Date;
  email: string;
  phoneNumber: number;
  parents: Parent[];
  courses: Course[];
  department: Department[];
  attendance: Attendance;
}
