import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Product } from 'src/interface/product';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  addProductForm:FormGroup;
  product:Product={
    id:0,
    name:'',
    vendorId:0,
    categoryId:0,
    quantityPerUnit:0,
    unitPrice:0,
    unitsInStock:0,
    unitsOnOrder:0,
    reorderLevel:0,
    discontinued:false,
    categoryName:'',
    vendorName:''
  }
  isSuccessful:boolean=false;


  constructor(private activatedRoute:ActivatedRoute,private builder:FormBuilder, private productService:ProductService) 
  {
    this.activatedRoute.params.subscribe(d=>{
      this.product.id=d["id"];
    });

    this.addProductForm=builder.group({
      "vendorName":new FormControl('',[]),
      "categoryName":new FormControl('',[]),
      "productUnitPrice":new FormControl('',[]),
      "productQuantityPerUnit":new FormControl('',[]),
      "productUnitsInStock":new FormControl('',[]),
      "productUnitsOnOrder":new FormControl('',[]),
      "productReorderLevel":new FormControl('',[]),
      "productDiscontinued":new FormControl('',[])
    })
   }

  ngOnInit(): void {
  }

  // insertProduct(form:NgForm){
  //   console.log(form.value)
  // }
  // resetPage(form:NgForm){
  //   form.reset();
  // }

  updateProduct(){
    this.product.vendorName=this.addProductForm.value["vendorName"];
    this.product.categoryName=this.addProductForm.value["productName"];
    this.product.unitPrice=this.addProductForm.value["productUnitPrice"];
    this.product.quantityPerUnit=this.addProductForm.value["productQuantityPerUnit"];
    this.product.unitsInStock=this.addProductForm.value["productUnitsInStock"];
    this.product.unitsOnOrder=this.addProductForm.value["productUnitsOnOrder"];
    this.product.discontinued=this.addProductForm.value["productDiscontinued"];
    this.productService.updateProduct(this.product).subscribe((data:any)=>{
      this.isSuccessful=true;
    });
  }
}
