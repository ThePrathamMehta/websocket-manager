import mongoose, { Types } from 'mongoose';
import { Collection } from '../constants/Collection';

export enum AttandenceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
}

export interface IAttendence {
  classId: Types.ObjectId;
  studentId: Types.ObjectId;
  status: AttandenceStatus;
}

const attendenceSchema = new mongoose.Schema<IAttendence>({
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Collection.USER,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Collection.USER,
  },
  status: {
    type: String,
    enum: Object.values(AttandenceStatus),
  },
});

export const AttendenceModel = mongoose.model(Collection.ATTEDNECE, attendenceSchema);
