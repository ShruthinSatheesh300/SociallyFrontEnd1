import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinte-scroll.component';

@NgModule({
  declarations: [InfiniteScrollComponent],
  imports: [CommonModule],
  exports: [InfiniteScrollComponent]
})
export class SharedModule {}
