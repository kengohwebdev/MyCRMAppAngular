import { VendorService } from './../../../services/vendor.service';
import { Vendor } from 'src/interface/vendor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.scss']
})
export class ListVendorComponent implements OnInit {


  // vendor =[
  //   {id:1, name:"Sun Belt", city:"Lafayette", country:"USA",regionId:1,mobile:"337",emailId:"demo@gmail.com",isActive:true},
  //   {id:2, name:"West Lake", city:"Lafayette", country:"USA",regionId:1,mobile:"337",emailId:"demo@gmail.com",isActive:true},
  //   {id:3, name:"Four Seasons", city:"Lafayette", country:"USA",regionId:1,mobile:"337",emailId:"demo@gmail.com",isActive:true}
  // ]
  vendorCollection: Vendor[]=[];
  constructor(private vendorService:VendorService, private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.vendorService.getAllVendor().subscribe((data)=>{
      this.vendorCollection=data;
    });
  }

  editVendor(id:any){
    this.router.navigate(['vendor/edit/'+id]);
  }

  deleteVendor(id:any){
    this.vendorService.deleteVendor(id).subscribe((d:any)=>{
      this.getData();
    });
  }

}
