import { Vendor } from './vendor';
import { Category } from './category';
export interface Product{
    name:string,
    vendorId:number,
    categoryId:number,
    quantityPerUnit:number,
    unitPrice:number,
    unitsInStock:number,
    unitsOnOrder:number,
    reorderLevel:number,
    discontinued:boolean,
    // category:Category,
    // vendor:Vendor
}