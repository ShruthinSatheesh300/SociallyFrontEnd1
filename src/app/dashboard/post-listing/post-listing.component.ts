import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { PostModel } from 'src/app/shared/models/post.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss'],
})
export class PostListingComponent implements OnChanges {
  public firstName!: string;
  public postId!: string;
  @Input() posts: PostModel[] = [];
  public likes = [];
  public user: string | null;
  public userId: any;

  constructor(
    private datePipe: DatePipe,
    private dashboardService: DashboardService
  ) {
    this.user = localStorage.getItem('UserData');
    if (this.user) {
      const user = JSON.parse(this.user);
      this.userId = user.id;
    }
  }
  @Output() updatedLikes = new EventEmitter<object>();

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
    this.dashboardService
      .updateLikes(this.userId, postId)
      .subscribe((res: any) => {
        this.likes = res.data.likes;
        this.updatedLikes.emit(res);
      });
  }
}
