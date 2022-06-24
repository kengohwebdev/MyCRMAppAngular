import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const routes:Routes=[
    {path:'list', component: ListCustomerComponent},
    {path:'add', component: AddCustomerComponent},
    {path:'edit/:id', component : EditCustomerComponent}
]

@NgModule(
    {
        imports:[RouterModule.forChild(routes)]
    }
)

export class CustomerRoutingModule{

}