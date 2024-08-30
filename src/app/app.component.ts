import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { HomepageModule } from './homepage/homepage.module';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomepageModule,
    AboutModule,
    ContactModule,
    SharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-website';
}
