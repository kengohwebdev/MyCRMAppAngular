import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, FormControl } from '@angular/forms';
import { Category } from './../../../interface/category';
import { CategoryService } from './../../../services/category.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  addCategoryForm:FormGroup;
  category:Category={
    id:0,
    name:'',
    description:''
  }
  isSuccessful:boolean=false;

  constructor(private activatedRoute:ActivatedRoute, private builder:FormBuilder, private categoryService:CategoryService) 
  {
    activatedRoute.params.subscribe(d=>{
      this.category.id=d["id"];      
    });
    this.addCategoryForm = builder.group({
      // "categoryId":new FormControl('',[]),
      "categoryName":new FormControl('',[]),
      "categoryDescription":new FormControl('',[])
    });
   }

  ngOnInit(): void {
  }

  updateCategory(){   
    // this.category.id=this.addCategoryForm.value["customerId"];
    this.category.name= this.addCategoryForm.value["categoryName"];
    this.category.description=this.addCategoryForm.value["categoryDescription"]
    this.categoryService.updateCategory(this.category).subscribe((data:any)=>{
      this.isSuccessful=true;
    });
  }

}
