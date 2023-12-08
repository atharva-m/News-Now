import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-entertainment',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.css'
})
export class EntertainmentComponent {

  constructor (private _services: NewsapiservicesService){}

  entertainDisplay: any = [];

  ngOnInit(): void{
    this._services.entertainment().subscribe((result)=>{
      this.entertainDisplay = result.articles;
    })
  }

}
