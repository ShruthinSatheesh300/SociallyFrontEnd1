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
