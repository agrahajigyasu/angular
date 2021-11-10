import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { DataService } from 'src/app/services/data.service';

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

  

  constructor(private route: ActivatedRoute, private dataService : DataService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.category = this.route.snapshot.params['category'];
    this.classType =  this.route.snapshot.params['class'];


      // this.objects =  [
      //   {
      //     "Title": "Lord of the Rings",
      //     "Author": "J.R.R Tolkien",
      //     "price": 25.99,
      //     "ISBN": "9780261102385",
      //     "publisher": "HarperCollins"
      //   },
      //   {
      //     "Title": "The Hobbit",
      //     "Author": "J.R.R Tolkien",
      //     "price": 9.88,
      //     "ISBN": "0261102214",
      //     "publisher": "HarperCollins"
      //   }
      // ];
      this.dataService.getProducts(this.classType,this.category).subscribe(data =>{
        this.objects = data;
        this.object = this.objects[this.productId];
        console.log(this.objects);
        });
      
    
      
  }

  private onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return -1;
  }

}
