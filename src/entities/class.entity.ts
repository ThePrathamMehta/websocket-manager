import mongoose, { Types } from 'mongoose';
import { Collection } from '../constants/Collection';

export interface IClass {
  className: string;
  teacherId: Types.ObjectId;
  studentIds: Types.ObjectId[];
}

const classSchema = new mongoose.Schema<IClass>({
  className: {
    type: String,
    required: true,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Collection.USER,
  },
  studentIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Collection.USER,
    },
  ],
});

export const ClassModel = mongoose.model(Collection.CLASS, classSchema);
