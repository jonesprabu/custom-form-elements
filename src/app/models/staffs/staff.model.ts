import { Department } from "../curriculum/department.model";
import { Designation } from "./designation.enum";

export interface Staff {
  id: number;
  staffId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  designation: Designation;
  department: Department;
  isTemporary: boolean;
}
