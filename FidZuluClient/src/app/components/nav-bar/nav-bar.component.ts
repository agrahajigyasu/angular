import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isNavbarCollapsed=true;
  constructor() { }
  toggleCollapse(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  ngOnInit(): void {
  }

}
