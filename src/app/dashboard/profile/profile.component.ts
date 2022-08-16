import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public followers!: string[];
  public following!: string[];

  constructor() {}
  ngOnInit(): void {
    const userData = localStorage.getItem('UserData');
    if (userData) {
      const user = JSON.parse(userData);
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.email = user.email;
      this.followers = user.followers;
      this.following = user.following;
    }
  }
}
