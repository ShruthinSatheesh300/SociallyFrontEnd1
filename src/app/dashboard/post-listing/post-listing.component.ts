import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { PostModel } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss'],
})
export class PostListingComponent implements OnChanges {
  public firstName!: string;
  @Input() posts: PostModel[] = [];

  constructor(private datePipe: DatePipe) {}
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
      console.log(userData);
      console.log(user);
      this.firstName = user.firstName;
    }
  }
}
