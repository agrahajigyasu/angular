import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryGalleryComponent } from './components/category-gallery/category-gallery.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'products/:class/:category',component:ProductListComponent},
  {path:'products/:class/:category/:id',component:ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
