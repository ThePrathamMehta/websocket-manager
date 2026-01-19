export class User {
  id: string;
  name: string;
  email: string;
  activeClassId: string | null;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.activeClassId = null;
  }
}
