import { Class } from './Class';

export class ClassManager {
  classes: Class[];
  static instance: ClassManager | null;

  getInstance() {
    if (ClassManager.instance != null) {
      return ClassManager.instance;
    }
    ClassManager.instance = new ClassManager();
    return ClassManager.instance;
  }

  constructor() {
    this.classes = [];
  }

  createClass(name: string, teacherId: string) {
    const newClass = new Class(name, teacherId);
    this.classes.push(newClass);
  }

  addStudent() { 

  }

}
