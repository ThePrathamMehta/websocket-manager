import mongoose from 'mongoose';
import { Collection } from '../constants/Collection';

enum UserRole {
  STUDENT = 'student',
  TEACHER = 'teacher',
}

export interface IUser {
  name: String;
  email: String;
  password: String;
  role: UserRole;
}

const userSchema = new mongoose.Schema<IUser>({
    name : {
        type : String,
        required  : true
    },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: Object.values(UserRole),
  },
});


export const UserModel = mongoose.model(Collection.USER,userSchema);