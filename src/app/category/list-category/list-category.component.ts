import { Component, OnInit } from '@angular/core';
import { Category } from 'src/interface/category';
import { CategoryService } from 'src/services/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  categoryCollection: Category[]=[]
  constructor(private categoryService:CategoryService, private router:Router) { }
  // category =[
  //   {id:1, name:"Vegetable", description:"Local Farm"},
  //   {id:2, name:"Seafood", description:"Imported"},
  //   {id:3, name:"Meat", description:"Local Produce"}
  // ]

  ngOnInit(): void {
   this.getData();
  }

  getData(){
    this.categoryService.getAllCategory().subscribe((data)=>{
      this.categoryCollection=data;
    })
  }

  editCategory(id:any){
    this.router.navigate(['category/edit/'+id]);
  }



  deleteCategory(id:any){
    this.categoryService.deleteCategory(id).subscribe((d:any)=>{
      this.getData();
    });
  }

}
