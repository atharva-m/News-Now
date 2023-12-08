import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent {

  constructor (private _services: NewsapiservicesService){}

  healthDisplay: any = [];

  ngOnInit(): void{
    this._services.health().subscribe((result)=>{
      this.healthDisplay = result.articles;
    })
  }

}
