import { ListRegionComponent } from './../region/list-region/list-region.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes:Routes=[
    {path:'add', component:AddEmployeeComponent},
    {path:'list', component:ListRegionComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class EmployeeRoutingModule{}
