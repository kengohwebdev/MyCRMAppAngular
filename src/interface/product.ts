import { Vendor } from './vendor';
import { Category } from './category';
export interface Product{
    id:number,
    name:string,
    vendorId:number,
    categoryId:number,
    quantityPerUnit:number,
    unitPrice:number,
    unitsInStock:number,
    unitsOnOrder:number,
    reorderLevel:number,
    discontinued:boolean,
    categoryName:string,
    vendorName:string
}