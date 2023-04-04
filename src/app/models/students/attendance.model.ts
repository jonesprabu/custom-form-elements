import { AttendanceType } from "./attendance-type.enum";
import { Course } from "../curriculum/course.model";

export interface Attendance {
  date: Date;
  course: Course;
  isPresent: boolean;
  attendanceType: AttendanceType;
}
