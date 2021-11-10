import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CategoryGalleryComponent } from '../components/category-gallery/category-gallery.component';

const MOCK_BIKES = [
  {
    "name": "Mamba Sport 12\" Balance Bike",
    "brand": "Mamba Bikes",
    "color": "black",
    "price": 75.88
  },
  {
    "name": "DJ Fat Bike 500W",
    "brand": "DJ Bikes",
    "color": "grey",
    "price": 1599.86
  },
  {
    "name": "Kobe Aluminum Balance",
    "brand": "Kobe",
    "color": "blue",
    "price": 88.56
  },
  {
    "name": "Pomona Men's Cruiser Bike",
    "brand": "Northwoods",
    "color": "silver",
    "price": 221.36
  }
];
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  baseUrl:string = 'http:/localhost:'
  constructor(private http: HttpClient) { 

  }

  getProducts(className:string,category:string,location:string = "USA"){
    return of(MOCK_BIKES);
    /*
    let port = className == 'classA' ? 3021 : 3022;
    let queryUrl = `${this.baseUrl}:${port}/${className}/${category + 'service/'}/all/${location}`;
    console.log(queryUrl);
    return this.http.get(queryUrl);*/
    
  }

  getTeams(className:string,category:string){
    let port = className == 'classA' ? 3021 : 3022;
    let queryUrl = `${this.baseUrl}:${port}/${className}/${category + 'service/'}/teams`;
    console.log(queryUrl);
    return this.http.get(queryUrl);
  }

  
}
