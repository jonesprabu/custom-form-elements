import { Occupations } from '../common/occupations.enum';
import { Student } from './student.model';

export interface Alumni extends Student {
  dol: Date;
  occupation: Occupations;
}
