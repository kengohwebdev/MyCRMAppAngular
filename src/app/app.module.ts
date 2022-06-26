import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegionModule } from './region/region.module';
import { ShipperModule } from './shipper/shipper.module';
import { VendorModule } from './vendor/vendor.module';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RegionModule,
    VendorModule,
    CategoryModule,
    CustomerModule,
    ShipperModule,
    EmployeeModule,
    AppRoutingModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
