import { ShipperRoutingModule } from './shipper-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShipperComponent } from './list-shipper/list-shipper.component';
import { AddShipperComponent } from './add-shipper/add-shipper.component';



@NgModule({
  declarations: [
    ListShipperComponent,
    AddShipperComponent
  ],
  imports: [
    CommonModule,
    ShipperRoutingModule
  ]
})
export class ShipperModule { }
