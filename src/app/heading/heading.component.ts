import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {

  constructor (private _services: NewsapiservicesService){}

  headingDisplay: any = [];

  ngOnInit(): void{
    this._services.heading().subscribe((result)=>{
      this.headingDisplay = result.articles;
    })
  }

}
