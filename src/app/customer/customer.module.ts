import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from 'src/services/customer.service';
import { CustomerRoutingModule } from './customer-routing.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AddCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[CustomerService]
})
export class CustomerModule { }
