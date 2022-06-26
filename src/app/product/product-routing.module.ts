import { NgModule } from "@angular/core";
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
    {path:'list', component:ListProductComponent},
    {path:'add', component:AddProductComponent},
    {path:'edit/:id',component:EditProductComponent}
        
]

@NgModule(
    {
        imports:[RouterModule.forChild(routes)]
    }
)
export class ProductRoutingModule{

}