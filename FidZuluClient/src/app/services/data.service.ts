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
    let urlCategory;

    //http://localhost:3022/classB/laptopservice/all/USA

    if(category=='books'){
      urlCategory='book';
    }
    else if(category=='dvds'){
      urlCategory='dvd';
    }
    else if(category=='laptops'){
      urlCategory='laptop';
    }
    else if(category=='toys'){
      urlCategory='toy';
    }
    else{
      urlCategory= category;
    }
    let queryUrl = `${this.baseUrl}:${port}/${className}/${urlCategory + 'service'}/all/${location}`;
    let classAurl:string = " http://c47f-34-124-147-146.ngrok.io";
    let classBurl:string= "http://31e2-34-124-147-146.ngrok.io";  
    console.log("Url: "+queryUrl);

   // let queryUrl = this.baseUrl +":3022/classB/bookservice/all/India";
    return  this.http.get(queryUrl);
    
  }

  getTeams(className:string,category:string){
    let port = className == 'classA' ? 3021 : 3022;
    let queryUrl = `${this.baseUrl}:${port}/${className}/${category + 'service/'}/teams`;
    console.log(queryUrl);
    return this.http.get(queryUrl);
  }

  
}
