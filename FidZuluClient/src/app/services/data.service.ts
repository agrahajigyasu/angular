import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CategoryGalleryComponent } from '../components/category-gallery/category-gallery.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  baseUrl:string = 'http://localhost'
  constructor(private http: HttpClient) { 

  }

  getProducts(className:string,category:string,location:string = "USA"){
    
    let port = className == 'classA' ? 3021 : 3022;

    //http://localhost:3022/classB/laptopservice/all/USA
    //let queryUrl = `${this.baseUrl}:${port}/${className}/${category + 'service'}/all/${location}`;

    let queryUrl = this.baseUrl +"/classB/bookservice/all/India";
    return  this.http.get(queryUrl);
    
  }

  getTeams(className:string,category:string){
    let port = className == 'classA' ? 3021 : 3022;
    let queryUrl = `${this.baseUrl}:${port}/${className}/${category + 'service/'}/teams`;
    console.log(queryUrl);
    return this.http.get(queryUrl);
  }

  
}
