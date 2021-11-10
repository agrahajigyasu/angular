import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId:any = -1;
  category: String = "book";
  books: Book[] = []

  objects: any[] = [];

  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];


    if(this.category == "book")
      this.objects =  [
        {
          "Title": "Lord of the Rings",
          "Author": "J.R.R Tolkien",
          "price": 25.99,
          "ISBN": "9780261102385",
          "publisher": "HarperCollins"
        },
        {
          "Title": "The Hobbit",
          "Author": "J.R.R Tolkien",
          "price": 9.88,
          "ISBN": "0261102214",
          "publisher": "HarperCollins"
        }
      ]
      
  }

  

}
