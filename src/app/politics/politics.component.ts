import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-politics',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './politics.component.html',
  styleUrl: './politics.component.css'
})
export class PoliticsComponent {

  constructor (private _services: NewsapiservicesService){}

  politicsDisplay: any = [];

  ngOnInit(): void{
    this._services.politics().subscribe((result)=>{
      this.politicsDisplay = result.results;
    })
  }

}
