import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomepageComponent],
  exports: [HomepageComponent],
})
export class HomepageModule {}
