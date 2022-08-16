import { UserModel } from './user.model';

export class PostModel {
  id: string;
  creator: UserModel;
  content: string;
  likes: string[];
  isLiked: boolean;
  createdAt: string;
  updatedAt: string;

  constructor(data: any) {
    this.id = data.id;
    this.content = data.content;
    this.likes = data.likes;
    this.isLiked = false;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.creator =
      typeof data.creator === 'string'
        ? data.creator
        : new UserModel(data.creator);
  }
}
