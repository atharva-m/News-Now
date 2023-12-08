import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {

  constructor (private _services: NewsapiservicesService){}

  techDisplay: any = [];

  ngOnInit(): void{
    this._services.tech().subscribe((result)=>{
      this.techDisplay = result.articles;
    })
  }

}
