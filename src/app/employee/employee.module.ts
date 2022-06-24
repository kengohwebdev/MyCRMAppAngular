import { EmployeeRoutingModule } from './employee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeService } from 'src/services/employee.service';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
