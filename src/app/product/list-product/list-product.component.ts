import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  constructor() { }

  products=[
    {id:1,vendorId:"Sun Belt", categoryId:"Vegetable", name:"Mushroom",unitPrice:25,unitsInStock:10,unitsOnOrder:5,reorderLevel:1,discontinued:false},
    {id:2,vendorId:"West Lake", categoryId:"Seafood", name:"Crab",unitPrice:50,unitsInStock:10,unitsOnOrder:5,reorderLevel:1,discontinued:false},
    {id:3,vendorId:"Four Season", categoryId:"Meat", name:"Chicken Breast",unitPrice:30,unitsInStock:10,unitsOnOrder:5,reorderLevel:1,discontinued:false}
  ]

  ngOnInit(): void {
  }

}
