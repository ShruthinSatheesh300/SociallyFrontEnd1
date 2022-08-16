import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostModel } from 'src/app/shared/models/post.model';
import { DashboardService } from '../dashboard.service';
import { UsersLikedComponent } from '../users-liked/users-liked.component';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss'],
})
export class PostListingComponent implements OnChanges {
  public firstName!: string;
  public postId!: string;
  public likes!: string[];
  @Input() posts: PostModel[] = [];

  constructor(
    private datePipe: DatePipe,
    private dashboardService: DashboardService,
    public dialog: MatDialog
  ) {}

  public getCreatedAt(timeStamp: string): string | null {
    const then = new Date(timeStamp);
    const now = new Date();
    const diffBetweenDates = now.getTime() - then.getTime();
    const format = 60 * 60 * 1000;

    const hoursBetweenDates = diffBetweenDates / format;
    if (hoursBetweenDates < 24) {
      return this.datePipe.transform(timeStamp, 'h:mm a');
    } else if (hoursBetweenDates > 48) {
      return this.datePipe.transform(timeStamp, 'MMM d, y');
    } else {
      return 'yesterday';
    }
  }

  ngOnChanges(): void {
    const userData = localStorage.getItem('UserData');
    if (userData) {
      const user = JSON.parse(userData);
      this.firstName = user.firstName;
    }
  }
  public updateLike(postId: string): void {
    const postIndex = this.posts.findIndex((post) => post.id === postId);

    this.dashboardService.updateLikes(postId).subscribe((post: PostModel) => {
      this.posts[postIndex] = post;
    });
  }

  public openDailog(): void {
    const dialogBox = this.dialog.open(UsersLikedComponent, {
      width: '600px',
      disableClose: true,
    });
    dialogBox.afterClosed().subscribe((res:any) => {
      this.usersLiked(res);
    });


  }

  public usersLiked(postId:string):void {
    this.dashboardService.usersLiked(postId).subscribe((res:any) => {
      this.posts = res
    })
  }
}
