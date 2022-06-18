import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ListShipperComponent } from './list-shipper/list-shipper.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes:Routes= [
    {path:'list', component:ListShipperComponent},
    {path:'add',component:AddShipperComponent}
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)]
    }

)
export class ShipperRoutingModule{

}