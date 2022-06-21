import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first, firstValueFrom } from 'rxjs';
import { Vendor } from 'src/interface/vendor';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {

  vendor:Vendor={
    regionId:0,
    name:'',
    city:'',
    country:'',
    mobile:'',
    emailId:'',
    isActive:true,
    region:firstValueFrom
  }

  constructor() { }

  ngOnInit(): void {
  }

insertVendor(form:NgForm){
  console.log(form.value)
}

  resetPage(form:NgForm){
    form.reset();
  }

}
