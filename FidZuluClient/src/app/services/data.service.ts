import { Injectable } from '@angular/core';
import { CategoryGalleryComponent } from '../components/category-gallery/category-gallery.component';

const MOCK_BOOKS = [
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
  
  constructor() { }

}
