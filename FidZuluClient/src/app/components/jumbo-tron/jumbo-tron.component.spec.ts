import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboTronComponent } from './jumbo-tron.component';

describe('JumboTronComponent', () => {
  let component: JumboTronComponent;
  let fixture: ComponentFixture<JumboTronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboTronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboTronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
