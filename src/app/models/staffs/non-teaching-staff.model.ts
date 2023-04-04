import { ShiftSlot } from './shift-slot.enum';
import { Staff } from './staff.model';

export interface NonTeachingStaff extends Staff {
  shift: ShiftSlot;
}
