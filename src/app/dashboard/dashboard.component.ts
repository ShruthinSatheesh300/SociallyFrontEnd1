import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostModel } from '../shared/models/post.model';
import { UserModel } from '../shared/models/user.model';
import { AddpostComponent } from './add-post/add-post.component';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public posts: PostModel[] = [];
  public post!: PostModel;
  public page: number = 0;
  public userId!: string;
  public user!: UserModel;

  constructor(
    public dailog: MatDialog,
    private router: Router,
    private dashboardService: DashboardService
  ) {}
  ngOnInit(): void {
    this.getUserId();
    this.getAllPosts();
  }
  private getUserId(): void {
    const user = localStorage.getItem('UserData');
    if (user) {
      this.user = JSON.parse(user);
      this.userId = this.user.id;
    }
  }

  public openDialog(): void {
    const dialogBox = this.dailog.open(AddpostComponent, {
      width: '600px',
      disableClose: true,
    });
    dialogBox.afterClosed().subscribe((result: { content: string }) => {
      this.createNewPost(result);
    });
  }
  public getAllPosts(): void {
    this.dashboardService
      .getAllPosts({ page: this.page })
      .subscribe((res: PostModel[]) => {
        this.scrollPage(res);
        this.calculateIsLiked(res);
        // this.posts = res;
      });
  }

  private scrollPage(posts: PostModel[]): void {
    posts.forEach((a: PostModel) => {
      this.posts.push(a);
    });
  }

  private calculateIsLiked(posts: PostModel[]): void {
    posts.forEach((post) => {
      const likes = post.likes;
      post.isLiked = likes.includes(this.userId);
    });
  }

  public createNewPost(postData: { content: string }): void {
    this.dashboardService.createPost(postData).subscribe({
      next: () => {
        this.getAllPosts();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public onScroll(): void {
    console.log('scrolled');
    this.page = ++this.page;
    this.getAllPosts();
  }

  public logOut(): void {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('UserName');
    this.router.navigateByUrl('');
  }

  public toProfile(): void {
    this.router.navigateByUrl('profilepage');
  }
}
