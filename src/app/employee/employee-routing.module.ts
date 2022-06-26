import { NgModule } from "@angular/core";
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
    {path:'list', component:ListEmployeeComponent},
    {path:'add', component:AddEmployeeComponent},
    {path:'edit:/id', component:EditEmployeeComponent}

]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class EmployeeRoutingModule{}
