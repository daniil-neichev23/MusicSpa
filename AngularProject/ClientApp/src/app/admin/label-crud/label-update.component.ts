import { Component, OnInit } from '@angular/core';  
import {AlbumService} from 'src/app/_services/entity-services/album-service';  
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';   
import { Artist } from 'src/app/models/artist';
import { Label } from 'src/app/models/label';
import { Album } from 'src/app/models/album';
import { LabelService } from 'src/app/_services/entity-services/label-service';
import { ArtistService } from 'src/app/_services/entity-services/artist-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({  
  selector: 'app-label-update',  
  templateUrl: './label-update.component.html',  
  styleUrls: ['./label-update.component.css']  
})  
export class LabelUpdateComponent implements OnInit {  

  constructor(public service: LabelService,
    private router: Router, private toastr: ToastrService, private route:ActivatedRoute) { }  
    id: string;
    label:any;

  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.id = this.route.snapshot.params['labelId'];
    // console.log(this.id);
    // this.getLabelData();
    // this.getArtistData(); 
    this.service.getLabelById(this.id).subscribe((data: any) => {
        this.label = data;
        this.service.labelForm.patchValue({
            Name: this.label.name,
        });
      });
  } 
  
//   getArtistData() {  
//     this.artistservice.getAllArtists().subscribe((data: any[]) => {  
//         this.artistArray = data;  
//       }) 
//   }  
//   getLabelData() {  
//     this.labelservice.getAllLabels().subscribe((data: any[]) => {  
//         this.labelArray = data;
//       }) 
//   }  
  

  onSubmit() {
    this.service.updateLabel( ).subscribe(res => {
      this.router.navigateByUrl('admin/label-list');
      this.toastr.success('Label was updated!','Success')
    });
  }
}