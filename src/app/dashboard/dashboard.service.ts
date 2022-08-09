import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpService } from '../core/http.service';
import { PostModel } from '../shared/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpService: HttpService) {}
  public getAllPosts(): Observable<PostModel[]> {
    return this.httpService.get('/posts/').pipe(
      map((result: any) => {
        const data = result.body.data;
        return data.map((post: any) => new PostModel(post));
      })
    );
  }

  public createPost(reqData: object): Observable<object> {
    return this.httpService.post('/posts/', reqData);
  }

  public updateLikes(reqData:object,postId: any): Observable<object> {
    return this.httpService.put('/posts/' + postId + '/like',reqData);
  }
}
