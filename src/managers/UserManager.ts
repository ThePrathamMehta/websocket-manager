import { User } from './User';
import { User as UserClass } from './User';

export class UserManager {
    
  users: User[];

  constructor() {
    this.users = [];
  }

  addUser(id: string, name: string, email: string) {
    const isUserExists = this.users.find((user) => user.id == id);
    if (!isUserExists) {
      this.users.push(new User(id, name, email));
    }
  }



}
