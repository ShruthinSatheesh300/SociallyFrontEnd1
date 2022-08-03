export class UserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(data: any) {
    this.id = data._id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
  }
}
