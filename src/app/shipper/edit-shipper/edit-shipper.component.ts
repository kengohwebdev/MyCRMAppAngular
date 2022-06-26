import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Shipper } from 'src/interface/shipper';
import { ShipperService } from './../../../services/shipper.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-shipper',
  templateUrl: './edit-shipper.component.html',
  styleUrls: ['./edit-shipper.component.scss']
})
export class EditShipperComponent implements OnInit {

  
  addShipperForm:FormGroup;
  shipper:Shipper={
    id:0,
    name:'',
    phone:''
  }
  isSuccessful:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,private builder:FormBuilder, private shipperService:ShipperService) 
  {
    activatedRoute.params.subscribe((d)=>{
      this.shipper.id=d["id"]
    })
    this.addShipperForm = builder.group({
      "shipperName" : new FormControl('',[]),
      "shipperPhone" : new FormControl('',[])
    });
  }

  ngOnInit(): void {
  }

  updateShipper(){
    this.shipper.name = this.addShipperForm.value["shipperName"];
    this.shipper.phone = this.addShipperForm.value["shipperPhone"];
      this.shipperService.updateShipper(this.shipper).subscribe((data)=>{
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
