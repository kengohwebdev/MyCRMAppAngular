import { VendorModule } from './vendor/vendor.module';
import { CategoryModule } from './category/category.module';
import { EmployeeModule } from './employee/employee.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionModule } from './region/region.module';
import { CustomerModule } from './customer/customer.module';
import { FormsModule } from '@angular/forms';

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
    EmployeeModule,
    AppRoutingModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
