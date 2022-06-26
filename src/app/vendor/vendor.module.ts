import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorRoutingModule } from './vendor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { RouterModule } from '@angular/router';
import { VendorService } from 'src/services/vendor.service';



@NgModule({
  declarations: [
    AddVendorComponent,
    ListVendorComponent,
    EditVendorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VendorRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[VendorService]
})
export class VendorModule { }
