import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) {}

  newsapiURL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dc9a7f62b92d4ebe8ee07bfc2a5bfa50"
  techapiURL = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=dc9a7f62b92d4ebe8ee07bfc2a5bfa50"
  businessapiURL = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=dc9a7f62b92d4ebe8ee07bfc2a5bfa50"
  sportsapiURL = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=dc9a7f62b92d4ebe8ee07bfc2a5bfa50"
  entertainapiURL = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=dc9a7f62b92d4ebe8ee07bfc2a5bfa50"
  healthapiURL = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=dc9a7f62b92d4ebe8ee07bfc2a5bfa50"
  hollywoodapiURL = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=dc9a7f62b92d4ebe8ee07bfc2a5bfa50"
  politicsapiURL = "https://newsdata.io/api/1/news?apikey=pub_343391ddee3f5fa82ea61f542d302e2bb8aca&q=politics&country=in" 

  heading(): Observable<any>
  {
    return this._http.get(this.newsapiURL);
  }

  tech(): Observable<any>
  {
    return this._http.get(this.techapiURL);
  }

  business(): Observable<any>
  {
    return this._http.get(this.businessapiURL);
  }

  sports(): Observable<any>
  {
    return this._http.get(this.sportsapiURL);
  }

  entertainment(): Observable<any>
  {
    return this._http.get(this.entertainapiURL);
  }

  health(): Observable<any>
  {
    return this._http.get(this.healthapiURL);
  }

  hollywood(): Observable<any>
  {
    return this._http.get(this.hollywoodapiURL);
  }

  politics(): Observable<any>
  {
    return this._http.get(this.politicsapiURL);
  }

}
