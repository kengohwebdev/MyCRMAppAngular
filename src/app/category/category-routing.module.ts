import { AddCategoryComponent } from './add-category/add-category.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { ListCategoryComponent } from './list-category/list-category.component';

const routes: Routes = [
    {path:'list', component: ListCategoryComponent},
    {path:'add', component: AddCategoryComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class CategoryRoutingModule{

}