import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createpost',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddpostComponent implements OnInit {
  public content!: string;

  constructor(public dialogRef: MatDialogRef<AddpostComponent>) {}

  ngOnInit(): void {}

  public onSubmit(): void {
    const postData = {
      content: this.content,
    };
    this.dialogRef.close(postData);
  }
}
