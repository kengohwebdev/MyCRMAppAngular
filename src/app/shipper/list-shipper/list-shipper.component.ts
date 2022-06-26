import { ShipperService } from './../../../services/shipper.service';
import { Shipper } from 'src/interface/shipper';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-shipper',
  templateUrl: './list-shipper.component.html',
  styleUrls: ['./list-shipper.component.scss']
})
export class ListShipperComponent implements OnInit {

 shipperCollection: Shipper[]=[];
  constructor(private shipperService:ShipperService, private router:Router) { }

  // shippers=[
  //   {id:1,name:"FedEx",phone:"337"},
  //   {id:2,name:"UPS",phone:"337"},
  //   {id:3,name:"DHL",phone:"337"},
  //   {id:4,name:"TFI international",phone:"337"},
  // ]

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.shipperService.getAllShipper().subscribe((data)=>{
      this.shipperCollection=data;
  });
}

  editShipper(id:any){
    this.router.navigate(['shipper/edit/'+id]);
  }

  deleteShipper(id:any){
    this.shipperService.deleteShipper(id).subscribe((data:any)=>{
      this.getData();
  });
}

}


