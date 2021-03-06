import { CategoryService } from './../../../services/category.service';
import { FormGroup, NgForm, FormBuilder, FormControl } from '@angular/forms';
import { Category } from './../../../interface/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm:FormGroup;
  category:Category={
    id:0,
    name:'',
    description:''
  }
  isSuccessful:boolean=false;

  constructor(private builder:FormBuilder, private categoryService:CategoryService) 
  {
    this.addCategoryForm = builder.group({
      // "categoryId":new FormControl('',[]),
      "categoryName":new FormControl('',[]),
      "categoryDescription":new FormControl('',[])
    });
   }

  ngOnInit(): void {
  }

  // insertCategory(form:NgForm){
  //   console.log(form.value)
  // }
  // resetPage(form:NgForm){
  //   form.reset();
  // }

  saveCategory(){
    // this.category.id=this.addCategoryForm.value["customerId"];
    this.category.name= this.addCategoryForm.value["categoryName"];
    this.category.description=this.addCategoryForm.value["categoryDescription"]
    this.categoryService.addCategory(this.category).subscribe((data:any)=>{
      this.isSuccessful=true;
    });
  }

}
