import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  books: Book[] = [
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
    },
    {
      "Title": "Lord of Souls",
      "Author": "Greg Keyes",
      "price": 12.98,
      "ISBN": "0345508025",
      "publisher": "Del Rey"
    },
    {
      "Title": "Chronicles of Narnia",
      "Author": "C. S. Lewis",
      "price": 41.77,
      "ISBN": "0064471195",
      "publisher": "HarperCollins"
    },
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

  item:String = "bookItem"
  constructor() { }

  ngOnInit(): void {
  }



}
