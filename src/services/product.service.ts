import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string= environment.apiKey+environment.apiControllers.product;
  constructor(private httpClient:HttpClient) { }

  getAllProduct():Observable<Product[]>
  {
   return this.httpClient.get<Product[]>(this.url);
  }

  addProduct(product:Product):Observable<any>
  {
    return this.httpClient.post(this.url,product);
  }

  getProductById(id:any):Observable<Product>{
    return this.httpClient.get<Product>(this.url+id);
  }

  getProductForEdit(id:any):Observable<Product>{
    return this.httpClient.get<Product>(this.url+id);
  }

  updateProduct(product:Product):Observable<any>
  {
    return this.httpClient.put(this.url,product);
  }
 
  
  deleteProduct(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+id);
  }
}