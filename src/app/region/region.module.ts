import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRegionComponent } from './add-region/add-region.component';
import { ListRegionComponent } from './list-region/list-region.component';
import { EditRegionComponent } from './edit-region/edit-region.component';
import { HttpClientModule } from '@angular/common/http';
import { RegionService } from 'src/services/region.service';
import { RegionRoutingModule } from './region-routing.module';
import { RouterModule, Routes } from '@angular/router';




@NgModule({
  declarations: [
    AddRegionComponent,
    ListRegionComponent,
    EditRegionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegionRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[RegionService]
})
export class RegionModule { }