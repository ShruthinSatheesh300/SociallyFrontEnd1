import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddpostComponent } from './add-post/add-post.component';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(
    public dailog: MatDialog,
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  public openDialog(): void {
    const dialogBox = this.dailog.open(AddpostComponent, {
      width: '600px',
      disableClose: true,
    });
    dialogBox.afterClosed().subscribe((result: { content: string }) => {
      this.createNewPost(result);
    });
  }

  public createNewPost(postData: { content: string }): void {
    this.dashboardService.createPost(postData).subscribe((res: any) => {});
  }

  public logOut() {
    localStorage.removeItem('Authorization');
    this.router.navigateByUrl('');
  }
}
