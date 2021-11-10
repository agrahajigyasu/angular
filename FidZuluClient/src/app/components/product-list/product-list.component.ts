import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return -1;
  }

  listObjects:any = [];
  bikeImages: any = ["/assets/bike0.jpg", "/assets/bike1.jpg","/assets/bike2.jpg","assets/bike3.jpg"];
  bookImages:any = ["/assets/book0.jpg","/assets/book1.jpg","/assets/book2.jpg","/assets/book3.jpg"]
  category:string = "";
  classType:string = "";
  constructor( private dataService : DataService, private route:ActivatedRoute ) { }

  ngOnInit(): void {

    this.category = this.route.snapshot.params['category'];
    this.classType =  this.route.snapshot.params['class'];
    this.dataService.getProducts(this.classType,this.category).subscribe(data =>{this.listObjects = data});

  }



}
