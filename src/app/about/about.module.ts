import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AboutComponent],
  exports: [AboutComponent],
})
export class AboutModule {}
