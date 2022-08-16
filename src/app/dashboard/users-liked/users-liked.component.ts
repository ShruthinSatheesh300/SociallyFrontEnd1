import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-liked',
  templateUrl: './users-liked.component.html',
  styleUrls: ['./users-liked.component.scss'],
})
export class UsersLikedComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UsersLikedComponent>) {}

  ngOnInit(): void {}

  onClose() {
    this.dialogRef.close()
  }
}

