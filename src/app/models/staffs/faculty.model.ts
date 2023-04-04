import { Course } from '../curriculum/course.model';
import { Staff } from './staff.model';

export interface Faculty extends Staff {
  courses: Course[];
}
