import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {

  constructor (private _services: NewsapiservicesService){}

  sportsDisplay: any = [];

  ngOnInit(): void{
    this._services.sports().subscribe((result)=>{
      this.sportsDisplay = result.articles;
    })
  }

}
