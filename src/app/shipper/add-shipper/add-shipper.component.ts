import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Shipper } from 'src/interface/shipper';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.component.html',
  styleUrls: ['./add-shipper.component.scss']
})
export class AddShipperComponent implements OnInit {

  shipper:Shipper={
    id:0,
    name:'',
    phone:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  insertShipper(form:NgForm){
    console.log(form.value)
  }

  resetPage(form:NgForm){
    form.reset();
  }


}
