import { ListProductComponent } from './list-product/list-product.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
    {path:'list', component:ListProductComponent},
    {path:'add', component:AddProductComponent}
        
]

@NgModule(
    {
        imports:[RouterModule.forChild(routes)]
    }
)
export class ProductRoutingModule{

}