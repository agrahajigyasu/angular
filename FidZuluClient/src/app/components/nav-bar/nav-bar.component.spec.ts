import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with isNavbarCollapsed set to true', () =>{
    expect(component.isNavbarCollapsed).toBeTrue();
  });

  it('should toggle isNavbarCollapsed when toggleCollapse() is called', () =>{
    component.toggleCollapse();
    expect(component.isNavbarCollapsed).toBeFalse();
  })
});
