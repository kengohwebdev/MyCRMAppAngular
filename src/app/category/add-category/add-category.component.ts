import { NgForm } from '@angular/forms';
import { Category } from './../../../interface/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category:Category={
    id:0,
    name:'',
    description:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  insertCategory(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
    form.reset();
  }

}
