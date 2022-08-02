import { UserModel } from './user.model';

export class PostModel {
  id: string;
  creator: UserModel;
  content: string;
  createdAt: string;
  updatedAt: string;

  constructor(data: any) {
    this.id = data.id;
    this.content = data.content;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.creator = new UserModel(data.creator);
  }
}
