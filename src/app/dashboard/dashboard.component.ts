import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostModel } from '../shared/models/post.model';
import { AddpostComponent } from './add-post/add-post.component';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public posts: PostModel[] = [];
  public post: any;

  constructor(
    public dailog: MatDialog,
    private router: Router,
    private dashboardService: DashboardService
  ) {}
  ngOnInit(): void {
    this.getAllPosts();
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
    this.dashboardService.getAllPosts().subscribe((res: PostModel[]) => {
      this.posts = res;
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
  onScroll() {
    console.log('scrolled');
  }
  public updatedDashboard() {
    this.getAllPosts();
  }

  public logOut() {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('UserName');
    this.router.navigateByUrl('');
  }
}
