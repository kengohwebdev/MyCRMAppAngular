import { FormsModule } from '@angular/forms';
import { VendorRoutingModule } from './vendor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';



@NgModule({
  declarations: [
    AddVendorComponent,
    ListVendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule
  ]
})
export class VendorModule { }
