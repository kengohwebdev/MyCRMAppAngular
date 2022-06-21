import { ListEmployeeComponent } from './list-employee/list-employee.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes:Routes=[
    {path:'add', component:AddEmployeeComponent},
    {path:'list', component:ListEmployeeComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class EmployeeRoutingModule{}
