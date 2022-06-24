import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CustomerService } from 'src/services/customer.service';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';



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
