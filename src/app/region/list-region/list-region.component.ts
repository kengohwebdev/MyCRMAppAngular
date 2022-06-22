import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-region',
  templateUrl: './list-region.component.html',
  styleUrls: ['./list-region.component.scss']
})
export class ListRegionComponent implements OnInit {

  constructor() { }

  regions =[
    {id:1,name:"SouthEast Asia"},
    {id:2,name:"Northern"},
    {id:3,name:"Southern"},

  ]

  ngOnInit(): void {
  }

}