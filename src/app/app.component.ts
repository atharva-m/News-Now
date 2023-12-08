import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { NgForOf } from '@angular/common';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, RouterLink, RouterLinkActive, NgForOf, LoadingBarHttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [NewsapiservicesService]
})
export class AppComponent {
  title = 'NewsNow';
}
