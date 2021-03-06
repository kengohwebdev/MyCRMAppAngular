import { ShipperService } from './../../../services/shipper.service';
import { NgForm, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Shipper } from 'src/interface/shipper';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.component.html',
  styleUrls: ['./add-shipper.component.scss']
})
export class AddShipperComponent implements OnInit {

  addShipperForm:FormGroup;
  shipper:Shipper={
    id:0,
    name:'',
    phone:''
  }
  isSuccessful:boolean=false;

  constructor(private builder:FormBuilder, private shipperService:ShipperService) 
  {
    this.addShipperForm = builder.group({
      "shipperName" : new FormControl('',[]),
      "shipperPhone" : new FormControl('',[])
    });
  }

  ngOnInit(): void {
  }

  saveShipper(){
    this.shipper.name = this.addShipperForm.value["shipperName"];
    this.shipper.phone = this.addShipperForm.value["shipperPhone"];
      this.shipperService.addShipper(this.shipper).subscribe((data)=>{
        this.isSuccessful=true;
      });
  }

  // insertShipper(form:NgForm){
  //   console.log(form.value)
  // }

  // resetPage(form:NgForm){
  //   form.reset();
  // }


}
