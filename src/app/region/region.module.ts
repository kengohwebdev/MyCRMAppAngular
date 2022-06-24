import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRegionComponent } from './add-region/add-region.component';
import { ListRegionComponent } from './list-region/list-region.component';
import { RegionRoutingModule } from './region-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegionService } from 'src/services/region.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EditRegionComponent } from './edit-region/edit-region.component';



@NgModule({
  declarations: [
    AddRegionComponent,
    ListRegionComponent,
    EditRegionComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[RegionService]
})
export class RegionModule { }