import { Region } from './../../../interface/region';

import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/interface/employee';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employee:Employee={
    firstName:'',
    lastName:'',
    title:'',
    titleOfCourtesy:'',
    birthDate:new Date(),
    hireDate:new Date(),
    address:'',
    city:'',
    postalCode:'',
    regionId:0,
    reportsTo:0,
    photoPath:'',
    phone:'',
    region:firstValueFrom
  }
 
  constructor() { }

  ngOnInit(): void {
  }

  insertEmployee(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
    form.reset();
  }

}
