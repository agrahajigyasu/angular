import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductListComponent } from './product-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
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
        }
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
  

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should contain a table', () => {
    //     component.books = [{
    //         title: 'The Lord of the Rings',
    //         author: 'J R R Tolkien',
    //         cover: '',
    //         bookId: 1
    //     }, {
    //         title: 'The Left Hand of Darkness',
    //         author: 'Ursula K Le Guin',
    //         cover: '',
    //         bookId: 2
    //     }];
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     const table = compiled.querySelector('table');
    //     // console.log(table);
    //     expect(table.rows.length).toBe(3);
    //     expect(table.rows[0].cells[0].textContent).toBe('Title');
    //     expect(table.rows[1].cells[0].textContent).toBe('The Lord of the Rings');
    //     expect(table.rows[2].cells[0].textContent).toBe('The Left Hand of Darkness');
    // });

    it('should contain a div if there are no books', () => {
        component.books = [];
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const table = compiled.querySelector('table');
        const div = compiled.querySelector('#nobooks');
        expect(div).toBeTruthy();
        expect(table.rows.length).toBe(1);
    });
});
});
