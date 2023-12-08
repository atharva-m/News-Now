import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

  constructor (private _services: NewsapiservicesService){}

  businessDisplay: any = [];

  ngOnInit(): void{
    this._services.business().subscribe((result)=>{
      this.businessDisplay = result.articles;
    })
  }

}
