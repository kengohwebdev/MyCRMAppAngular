import { FormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';



@NgModule({
  declarations: [
    AddCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
    
  ]
})
export class CategoryModule { }
