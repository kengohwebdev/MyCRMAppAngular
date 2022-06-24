import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/interface/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
// export class ListEmployeeComponent implements OnInit {

//   employees=[
//     {id:1, titleOfCourtesy:"Mr", firstName:"Peter", lastName:"Parker", title:"Manager"},
//     {id:2, titleOfCourtesy:"Ms", firstName:"Mary", lastName:"Jane", title:"Assistance Manager"},
//     {id:3, titleOfCourtesy:"Mr", firstName:"Michael", lastName:"Jones", title:"Cook"},
//     {id:4, titleOfCourtesy:"Ms", firstName:"Poco", lastName:"Jones", title:"Server"}
//   ]

export class ListEmployeeComponent implements OnInit {

  empCollection:Employee[]=[]
  constructor(private empService:EmployeeService, private router:Router) { }

//   ngOnInit(): void {
//     this.getAllEmployee();
//   }
//   getAllEmployee(){
//   this.empService.getAllEmployee().subscribe(d=>{
//     this.empCollection=d;
//   })
//   }
//   updateEmployeeById(id:any){
//  this.router.navigate(['employee/edit/'+id]);
//   }
// }



ngOnInit(): void {
  this.getData();
 }

 getData(){
   this.empService.getAllEmployee().subscribe((data)=>{
     this.empCollection=data;
   });
 }

 updateEmployeeById(id:any){
   this.router.navigate(['employee/edit/'+id]);
 }

 deleteEmployee(id:any){
  this.empService.deleteEmployee(id).subscribe((d:any)=>{
   this.getData();
  });
 }

}