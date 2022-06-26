import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/interface/customer';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  addCustomerForm:FormGroup;
  customer:Customer={
    id:0,
    name:'',
    title:'',
    address:'',
    city:'',
    regionId:0,
    postalCode:'',
    country:'',
    phone:'',
    regionName:''
  }
  isSuccessful:boolean=false;

  constructor(private builder:FormBuilder, private customerService:CustomerService) 
  { 
    this.addCustomerForm = builder.group({
      "customerName":new FormControl('',[]),
      "customerTitle":new FormControl('',[]),
      "customerPhone":new FormControl('',[]),
      "customerAddress":new FormControl('',[]),
      "customerPostalCode":new FormControl('',[]),
      "customerCity":new FormControl('',[]),
      "customerCountry":new FormControl('',[]),
      // 'customerRegion':new FormControl('',[])
    });
  }

  ngOnInit(): void {
  }

  saveCustomer(){
    // this.customer.id=0;
    this.customer.name=this.addCustomerForm.value["customerName"];
    this.customer.title=this.addCustomerForm.value["customerTitle"];
    this.customer.phone=this.addCustomerForm.value["customerPhone"];
    this.customer.address=this.addCustomerForm.value["customerAddress"];
    this.customer.postalCode=this.addCustomerForm.value["customerPostalCode"];
    this.customer.city=this.addCustomerForm.value["customerCity"];
    this.customer.country=this.addCustomerForm.value["customerCountry"];
    // this.customer.regionName=this.addCustomerForm.value["customerRegion"];
    this.customerService.addCustomer(this.customer).subscribe((data:any)=>{
      this.isSuccessful=true;
    });

  }

}
