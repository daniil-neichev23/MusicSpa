import { Component, OnInit } from '@angular/core';  
import {AlbumService} from 'src/app/_services/entity-services/album-service';  
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';   
import { Artist } from 'src/app/models/artist';
import { Label } from 'src/app/models/label';
import { Album } from 'src/app/models/album';
import { LabelService } from 'src/app/_services/entity-services/label-service';
import { ArtistService } from 'src/app/_services/entity-services/artist-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MusicianService } from 'src/app/_services/entity-services/musician-service';
import { RecordingService } from 'src/app/_services/entity-services/recording-service';
import { ReviewerService } from 'src/app/_services/entity-services/reviewer-service';

@Component({  
  selector: 'app-reviewer-create',  
  templateUrl: './reviewer-create.component.html',  
  styleUrls: ['./reviewer-create.component.css']  
})  
export class ReviewerCreateComponent implements OnInit {  

  constructor(public service: ReviewerService,
    private router: Router, private toastr: ToastrService) { }  
   
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.service.reviewerForm.reset();

    // this.getLabelData();
    // this.getArtistData(); 
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
    this.service.createReviewer().subscribe(res => {
      this.router.navigateByUrl('admin/reviewer-list');
      this.toastr.success('New reviewer created!','Creation successful')
    });
  }
}

