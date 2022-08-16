import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpService } from '../core/http.service';
import { PostModel } from '../shared/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpService: HttpService) {}
  public getAllPosts(page?: any): Observable<PostModel[]> {
    return this.httpService.get('/posts/', page).pipe(
      map((result: any) => {
        const data = result.body.data;
        return data.map((post: any) => new PostModel(post));
      })
    );
  }

  public createPost(reqData: object): Observable<object> {
    return this.httpService.post('/posts/', reqData);
  }

  public updateLikes(postId: string): Observable<PostModel> {
    return this.httpService.put('/posts/' + postId + '/like').pipe(
      map((result: any) => {
        return new PostModel(result.data);
      })
    );
  }
  public usersLiked(postId: string): Observable<object> {
    return this.httpService.get('/posts/' + postId);
  }
}
