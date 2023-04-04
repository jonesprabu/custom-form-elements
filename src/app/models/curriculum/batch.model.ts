import { BatchShifts } from "./batch-shifts.enum";


export interface Batch {
  id: number;
  year: number;
  name: string;
  shift: BatchShifts;
}
