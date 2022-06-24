import { RegionService } from 'src/services/region.service';
import { RegionModule } from '../region.module';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Region } from 'src/interface/region';


@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {
 
  addRegionForm:FormGroup;
  region:Region={
    id:0,
    name:''
  }

  isSuccessful:boolean=false;


  //  loadRegion={
  //   'regionName':'Asian'
    
  // }
 
  constructor(private builder:FormBuilder, private regionService:RegionService) {
    this.addRegionForm= builder.group({
      'regionName':new FormControl(null,[Validators.required,Validators.minLength(4)])

    });
   // this.addRegionForm.setValue(this.loadRegion)
  // this.addRegionForm.patchValue(this.loadRegion);
   }


  ngOnInit(): void {
    
  }

  saveRegion(){
    this.region.id=0;
    this.region.name=this.addRegionForm.value["regionName"];
    this.regionService.addRegion(this.region).subscribe((d:any)=>{
      this.isSuccessful=true;
    });

    
  }

    // insertRegion(form:NgForm){
  //   console.log(form.value)
  // }
  // resetPage(form:NgForm){
  //   form.reset();
  // }

}



