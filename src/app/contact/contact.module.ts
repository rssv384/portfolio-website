import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ContactComponent],
  exports: [ContactComponent],
})
export class ContactModule {}
