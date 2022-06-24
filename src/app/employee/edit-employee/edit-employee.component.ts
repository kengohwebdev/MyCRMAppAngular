import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/interface/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  id:number=0;
  employee:Employee={
    firstName:'',
    lastName:'',
    fullName:'',
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
    id:0,
    regionName:''
  }
  
  constructor(private activatedRoute:ActivatedRoute, private empService:EmployeeService) { 
    activatedRoute.params.subscribe(d=>{
    this.id=  d["id"]
    })
  }

  ngOnInit(): void {
  }
 setData(ngForm:NgForm){
  this.empService.getEmployeeById(this.id).subscribe(d=>{
    this.employee=d;
  })
 ngForm.setValue(this.employee)
 
}
editEmployee(ngForm:NgForm)
{
  this.employee= ngForm.value;
  this.empService.updateEmployee(this.employee).subscribe(d=>{

  });
}
}