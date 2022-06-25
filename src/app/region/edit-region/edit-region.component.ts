
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/interface/region';
import { RegionService } from 'src/services/region.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.scss']
})
export class EditRegionComponent implements OnInit {


  addRegionForm:FormGroup;
  region:Region={
    id:0,
    name:''
  }
  isSuccessful:boolean=false;

  constructor(private activatedRoute:ActivatedRoute, private builder:FormBuilder, private regionService:RegionService) 
  { 
    this.activatedRoute.params.subscribe(d=>{
      this.region.id=d["id"]      
    })
    this.addRegionForm = builder.group({
      'regionName':new FormControl(null,[Validators.required,Validators.minLength(4)])
    });
  }

  ngOnInit(): void {
  }

  updateRegion(){
    this.region.name=this.addRegionForm.value["regionName"];
    this.regionService.updateRegion(this.region).subscribe((data:any)=>{
    this.isSuccessful=true;
    });

  }

}
