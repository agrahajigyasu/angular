import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { ProductDetailsComponent } from './product-details.component';

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

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    let dataService: any = jasmine.createSpyObj('DataService',
    ['getProducts']);
    dataService.getProducts.and.returnValue(of(mockData)); 


    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
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
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve data from the service', () => {
    expect(component.objects.length).toBeGreaterThanOrEqual(2);
    console.log(component.objects);
  });


});
