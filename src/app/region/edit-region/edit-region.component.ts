import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/interface/region';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.scss']
})
export class EditRegionComponent implements OnInit {

  editRegionForm:FormGroup;
  region:Region={
    id:0,
    name:''
  }

  isSuccessful:boolean=false;


 
  constructor(private builder:FormBuilder, private regionService:RegionService) {
    this.editRegionForm= builder.group({
      'regionName':new FormControl(null,[Validators.required,Validators.minLength(4)])

    });

   }


  ngOnInit(): void {
    
  }

  updateRegion(){
    this.region.id=0;
    this.region.name=this.editRegionForm.value["regionName"];
    this.regionService.getRegionById(this.region).subscribe((d:any)=>{
      this.isSuccessful=true;
    });

    
  }

}

