import { ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/interface/vendor';
import { VendorService } from './../../../services/vendor.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent implements OnInit {

  addVendorForm:FormGroup;
  vendor:Vendor={
    name:'',
    city:'',
    country:'',
    mobile:'',
    emailId:'',
    isActive:true,
    id:0,
    // regionId:0,
    // regionName:''
  }
  isSuccessful:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,private builder:FormBuilder, private vendorService:VendorService) 
  {
    this.activatedRoute.params.subscribe(d=>{
      this.vendor.id=d["id"]      
    })
    this.addVendorForm = builder.group({
      "vendorName":new FormControl('',[]),
      "vendorEmailId":new FormControl('',[]),
      "vendorMobile":new FormControl('',[]),
      "vendorCity":new FormControl('',[]),
      "vendorCountry":new FormControl('',[]),
      // "vendorIsActive":new FormControl('',[])
    })
  }

  ngOnInit(): void {
  }

  updateVendor(){
    this.vendor.name=this.addVendorForm.value["vendorName"];
    this.vendor.emailId=this.addVendorForm.value["vendorEmailId"];
    this.vendor.mobile=this.addVendorForm.value["vendorMobile"];
    this.vendor.city=this.addVendorForm.value["vendorCity"];
    this.vendor.country=this.addVendorForm.value["vendorCountry"];
    this.vendor.isActive=this.addVendorForm.value["vendorIsActive"];

    this.vendorService.updateVendor(this.vendor).subscribe((data:any)=>{
      this.isSuccessful=true;
    });
  
  }

// insertVendor(form:NgForm){
//   console.log(form.value)
// }

//   resetPage(form:NgForm){
//     form.reset();
//   }

}
