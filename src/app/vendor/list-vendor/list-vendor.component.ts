import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.scss']
})
export class ListVendorComponent implements OnInit {

  vendor =[
    {id:1, name:"Sun Belt", city:"Lafayette", country:"USA",regionId:1,mobile:"337",emailId:"demo@gmail.com",isActive:true},
    {id:2, name:"West Lake", city:"Lafayette", country:"USA",regionId:1,mobile:"337",emailId:"demo@gmail.com",isActive:true},
    {id:3, name:"Four Seasons", city:"Lafayette", country:"USA",regionId:1,mobile:"337",emailId:"demo@gmail.com",isActive:true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
