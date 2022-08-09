import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard.component';
import { PostListingComponent } from './post-listing/post-listing.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddpostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, PostListingComponent, AddpostComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule,
    InfiniteScrollModule,
  ],
})
export class DashboardModule {}
