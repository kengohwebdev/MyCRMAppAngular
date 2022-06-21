import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-shipper',
  templateUrl: './list-shipper.component.html',
  styleUrls: ['./list-shipper.component.scss']
})
export class ListShipperComponent implements OnInit {

  constructor() { }

  shippers=[
    {id:1,name:"FedEx",phone:"337"},
    {id:2,name:"UPS",phone:"337"},
    {id:3,name:"DHL",phone:"337"},
    {id:4,name:"TFI international",phone:"337"},
  ]

  ngOnInit(): void {
  }

}
