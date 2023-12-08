import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-hollywood',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './hollywood.component.html',
  styleUrl: './hollywood.component.css'
})
export class HollywoodComponent {

  constructor (private _services: NewsapiservicesService){}

  hollyDisplay: any = [];

  ngOnInit(): void{
    this._services.hollywood().subscribe((result)=>{
      this.hollyDisplay = result.articles;
    })
  }

}
