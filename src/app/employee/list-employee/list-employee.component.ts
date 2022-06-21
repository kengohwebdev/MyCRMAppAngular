import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  employees=[
    {id:1, titleOfCourtesy:"Mr", firstName:"Peter", lastName:"Parker", title:"Manager"},
    {id:2, titleOfCourtesy:"Ms", firstName:"Mary", lastName:"Jane", title:"Assistance Manager"},
    {id:3, titleOfCourtesy:"Mr", firstName:"Michael", lastName:"Jones", title:"Cook"},
    {id:4, titleOfCourtesy:"Ms", firstName:"Poco", lastName:"Jones", title:"Server"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
