import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/models/post.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss'],
})
export class PostListingComponent implements OnInit {
  public posts: PostModel[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }
  public getAllPosts(): void {
    this.dashboardService.getAllPosts().subscribe((res: PostModel[]) => {
      console.log(res);

      this.posts = res;
    });
  }
}
