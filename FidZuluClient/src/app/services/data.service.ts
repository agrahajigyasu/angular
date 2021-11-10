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
    let classAurl:String="http://015e-34-124-147-146.ngrok.io";
    let classBurl:String="http://2907-34-124-147-146.ngrok.io";
    let queryUrl = `${className == 'classA' ? classAurl : classBurl}/${className}/${urlCategory + 'service'}/all/${location}`;
    
    console.log("a Url: "+queryUrl);

   // let queryUrl = this.baseUrl +":3022/classB/bookservice/all/India";
    return  this.http.get(queryUrl);
    
  }

  getTeams(className:string,category:string){
    let urlCategory;
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
    let classAurl:String="http://015e-34-124-147-146.ngrok.io";
    let classBurl:String="http://2907-34-124-147-146.ngrok.io";
    let queryUrl = `${className == 'classA' ? classAurl : classBurl}/${className}/${urlCategory + 'service'}/team`;
    console.log(queryUrl);
    return this.http.get(queryUrl);
  }

  
}
