import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId:any = -1;
  category: string = "";
  classType: string = "";
  books: Book[] = []

  objects: any = [];
  object: any = null;
  
  

  constructor(private route: ActivatedRoute, private dataService : DataService, private location: Location) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.category = this.route.snapshot.params['category'];
    this.classType =  this.route.snapshot.params['class'];

      this.dataService.getProducts(this.classType,this.category).subscribe(data =>{
        this.objects = data;
        this.object = this.objects[this.productId];
        console.log(this.objects);
        });
      
  }

  private onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return -1;
  }

  goBack(): void {
    this.location.back();
  }


}