import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductListComponent } from './product-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

const mockData:any = [
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
];

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    let dataService: any = jasmine.createSpyObj('DataService',
    ['getProducts']);
    dataService.getProducts.and.returnValue(of(mockData)); 

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:
      [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {class: 'classA',category:'bikes',id:'1'}}
          }
        },
        {provide: DataService, useValue: dataService}
      ]
      ,
      declarations: [ ProductListComponent ]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve data from the service', () => {
    expect(component.listObjects.length).toBeGreaterThanOrEqual(2);
    console.log(component.listObjects);
  });
});
