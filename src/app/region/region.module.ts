import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRegionComponent } from './add-region/add-region.component';
import { ListRegionComponent } from './list-region/list-region.component';
import { RegionRoutingModule } from './region-routing.module';



@NgModule({
  declarations: [
    AddRegionComponent,
    ListRegionComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule
  ]
})
export class RegionModule { }