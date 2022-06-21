import { VendorModule } from './vendor/vendor.module';
import { CategoryModule } from './category/category.module';
import { EmployeeModule } from './employee/employee.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionModule } from './region/region.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegionModule,
    EmployeeModule,
    CategoryModule,
    VendorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
