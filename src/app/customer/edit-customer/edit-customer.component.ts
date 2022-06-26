import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Customer } from 'src/interface/customer';
import { CustomerService } from 'src/services/customer.service';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

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

  constructor(private activatedRoute:ActivatedRoute,private builder:FormBuilder, private customerService:CustomerService) 
  { 

    activatedRoute.params.subscribe(d=>{
      this.customer.id=d["id"]      
    })
    this.addCustomerForm = builder.group({
      "customerName":new FormControl('',[Validators.required,Validators.minLength(4)]),
      "customerTitle":new FormControl('',[Validators.required,Validators.minLength(2)]),
      "customerPhone":new FormControl('',[Validators.required]),
      "customerAddress":new FormControl('',[Validators.required]),
      "customerPostalCode":new FormControl('',[Validators.required]),
      "customerCity":new FormControl('',[Validators.required]),
      "customerCountry":new FormControl('',[Validators.required]),
      // "customerRegion":new FormControl('',[Validators.required]),
      // "customerRegionId":new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  updateCustomer(){
    this.customer.name=this.addCustomerForm.value["customerName"];
    this.customer.title=this.addCustomerForm.value["customerTitle"];
    this.customer.phone=this.addCustomerForm.value["customerPhone"];
    this.customer.address=this.addCustomerForm.value["customerAddress"];
    this.customer.postalCode=this.addCustomerForm.value["customerPostalCode"];
    this.customer.city=this.addCustomerForm.value["customerCity"];
    this.customer.country=this.addCustomerForm.value["customerCountry"];
    // this.customer.regionName=this.addCustomerForm.value["customerRegion"];
    // this.customer.regionId=this.addCustomerForm.value["customerRegionId"];
    this.customerService.updateCustomer(this.customer).subscribe((data:any)=>{
    this.isSuccessful=true;
    });

  }

}
