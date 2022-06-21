import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  constructor() { }
  category =[
    {id:1, name:"Vegetable", description:"Local Farm"},
    {id:2, name:"Seafood", description:"Imported"},
    {id:3, name:"Meat", description:"Local Produce"}
  ]

  ngOnInit(): void {
  }

}
