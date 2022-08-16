export class UserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  followers:string[];
  following:string[]

  constructor(data: any) {
    this.id = data._id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.followers = data.followers;
    this.following = data.following
  }
}
