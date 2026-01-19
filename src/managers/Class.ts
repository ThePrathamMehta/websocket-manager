import type { User } from './User';

export const generateId = () => {
  return Math.random().toString(36).substring(2, 7).toUpperCase();
};

export class Class {
  id: string;
  name: string;
  studentIds: User[];
  teacherId: string;

  constructor(name: string, teacherId: string) {
    this.id = generateId();
    this.name = name;
    this.studentIds = [];
    this.teacherId = teacherId;
  }

  addStudent(student: User) {
    this.studentIds.push(student);
  }

  getClassStatus() {}
}
