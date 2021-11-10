import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return -1;
  }

  loading:boolean=true;

  listObjects:any = [];
  bikeImages: any = ["/assets/bike0.jpg", "/assets/bike1.jpg","/assets/bike2.jpg","assets/bike3.jpg"];
  bookImages:any = ["/assets/book0.jpg","/assets/book1.jpg","/assets/book2.jpg","/assets/book3.jpg"]
  dvdImages:any = ["/assets/dvd0.jpg","/assets/dvd1.jpg","/assets/dvd2.jpg","/assets/dvd3.jpg"]
  foodImages:any = ["/assets/food0.jpg","/assets/food1.jpg","/assets/food2.jpg","/assets/food3.jpg","/assets/food4.jpg"]
  laptopImages:any = ["/assets/laptop0.jpg","/assets/laptop1.jpg","/assets/laptop2.jpg","/assets/laptop3.jpg"]
  toyImages:any = ["/assets/toy0.jpg","/assets/toy1.jpg","/assets/toy2.jpg","/assets/toy3.jpg","/assets/toy4.jpg"]
  
  category:string = "";
  classType:string = "";
  constructor( private dataService : DataService, private route:ActivatedRoute,  private location: Location ) { }

  ngOnInit(): void {

    this.category = this.route.snapshot.params['category'];
    this.classType =  this.route.snapshot.params['class'];
    this.dataService.getProducts(this.classType,this.category).subscribe(data =>{this.listObjects = data; this.loading=false;});

  }

  goBack(): void {
    this.location.back();
  }


}
