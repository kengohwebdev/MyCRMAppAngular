import { Router } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Product } from 'src/interface/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  productCollection: Product[]=[]
  constructor(private productService:ProductService, private router:Router) { }

  // products=[
  //   {id:1,vendorId:"Sun Belt", categoryId:"Vegetable", name:"Mushroom",unitPrice:25,unitsInStock:10,unitsOnOrder:5,reorderLevel:1,discontinued:false},
  //   {id:2,vendorId:"West Lake", categoryId:"Seafood", name:"Crab",unitPrice:50,unitsInStock:10,unitsOnOrder:5,reorderLevel:1,discontinued:false},
  //   {id:3,vendorId:"Four Season", categoryId:"Meat", name:"Chicken Breast",unitPrice:30,unitsInStock:10,unitsOnOrder:5,reorderLevel:1,discontinued:false}
  // ]

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.productService.getAllProduct().subscribe((data:any)=>{
      this.productCollection=data;
    });
  }

  editProduct(id:any){
    this.router.navigate(['product/edit/'+id]);
  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe((d:any)=>{
      this.getData();
    });
  }

}
