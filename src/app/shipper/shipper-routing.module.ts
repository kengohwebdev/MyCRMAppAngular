import { NgModule } from "@angular/core";
import { ListShipperComponent } from './list-shipper/list-shipper.component';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { EditShipperComponent } from './edit-shipper/edit-shipper.component';
import { RouterModule,Routes } from '@angular/router';


const routes:Routes= [
    {path:'list', component:ListShipperComponent},
    {path:'add',component:AddShipperComponent},
    {path:'edit:/id',component:EditShipperComponent}
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)]
    }

)
export class ShipperRoutingModule{

}