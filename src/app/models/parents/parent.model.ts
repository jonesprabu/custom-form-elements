import { Student } from '../students/student.model';
import { Occupations} from '../common/occupations.enum';
import { Educations } from '../common/educations.enum';

export interface Parent {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  occupation: Occupations;
  education: Educations;
  students: Student[];
  relationship: string;
}
