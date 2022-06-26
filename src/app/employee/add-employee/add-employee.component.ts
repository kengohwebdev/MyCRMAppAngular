import { EmployeeService } from './../../../services/employee.service';
import { NgForm, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/interface/employee';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {


  addEmployeeForm:FormGroup;
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
  isSuccessful:boolean=false;
 
  constructor(private builder:FormBuilder, private employeeService:EmployeeService)
  {
    this.addEmployeeForm = builder.group({
      "employeeTitle": new FormControl('',[]),
      "employeeFirstName": new FormControl('',[]),
      "employeeLastName": new FormControl('',[]),
      // "employeeFullName": new FormControl('',[]),
      "employeeCourtesy": new FormControl('',[]),
      "employeePhone": new FormControl('',[]),
      "employeeBirthdate": new FormControl('',[]),
      "employeeAddress": new FormControl('',[]),
      "employeeCity": new FormControl('',[]),
      "employeeRegionName": new FormControl('',[]),
      "employeePhotoPath": new FormControl('',[])
    })
  }

  ngOnInit(): void {
  }

  // insertEmployee(form:NgForm){
  //   console.log(form.value)
  // }
  // resetPage(form:NgForm){
  //   form.reset();
  // }

  saveEmployee(){
    this.employee.title=this.addEmployeeForm.value["employeeTitle"];
    this.employee.firstName=this.addEmployeeForm.value["employeeFirstName"];
    this.employee.lastName=this.addEmployeeForm.value["employeeLastName"];
    // this.employee.fullName=this.addEmployeeForm.value["employeeFullName"];
    this.employee.titleOfCourtesy=this.addEmployeeForm.value["employeeCourtesy"];
    this.employee.phone=this.addEmployeeForm.value["employeePhone"];
    this.employee.birthDate=this.addEmployeeForm.value["employeeBirthdate"];
    this.employee.address=this.addEmployeeForm.value["employeeAddress"];
    this.employee.city=this.addEmployeeForm.value["employeeCity"];
    this.employee.regionName=this.addEmployeeForm.value["employeeRegionName"];
    this.employee.photoPath=this.addEmployeeForm.value["employeePhotoPath"];

    this.employeeService.addEmployee(this.employee).subscribe((data:any)=>{
      this.isSuccessful=true;
    });
  }
}
