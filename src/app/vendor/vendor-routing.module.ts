import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes:Routes=[

    {path:'list', component:ListVendorComponent},
    {path:'add', component: AddVendorComponent}
]


@NgModule(
    {
        imports :[RouterModule.forChild(routes)]
    }
)

export class VendorRoutingModule{

}