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

  constructor(private builder:FormBuilder, private customerService:CustomerService) 
  { 
    this.addCustomerForm = builder.group({
      'customerName':new FormControl(null,[Validators.required,Validators.minLength(4)]),
      'customerTitle':new FormControl(null,[Validators.required,Validators.minLength(2)]),
      'customerPhone':new FormControl(null,[]),
      'customerAddress':new FormControl(null,[]),
      'customerPostalCode':new FormControl(null,[]),
      'customerCity':new FormControl(null,[]),
      'customerCountry':new FormControl(null,[]),
      'customerRegion':new FormControl(null,[]),
      'customerRegionId':new FormControl(null,[])
    });
  }

  ngOnInit(): void {
  }

  updateCustomer(){
    this.customer.id=0;
    this.customer.name=this.addCustomerForm.value["customerName"];
    this.customer.title=this.addCustomerForm.value["customerTitle"];
    this.customer.phone=this.addCustomerForm.value["customerPhone"];
    this.customer.address=this.addCustomerForm.value["customerAddress"];
    this.customer.postalCode=this.addCustomerForm.value["customerPostalCode"];
    this.customer.city=this.addCustomerForm.value["customerCity"];
    this.customer.country=this.addCustomerForm.value["customerCountry"];
    this.customer.regionName=this.addCustomerForm.value["customerRegion"];
    this.customer.regionId=this.addCustomerForm.value["customerRegionId"];
    this.customerService.getCustomerForEdit(this.customer).subscribe((d:any)=>{
    this.isSuccessful=true;
    });

  }

}
