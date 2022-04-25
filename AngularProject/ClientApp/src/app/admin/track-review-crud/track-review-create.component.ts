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
import { TrackReviewService } from 'src/app/_services/entity-services/track-review-service';

@Component({  
  selector: 'app-track-review-create',  
  templateUrl: './track-review-create.component.html',  
  styleUrls: ['./track-review-create.component.css']  
})  
export class TrackReviewCreateComponent implements OnInit {  

  constructor(public service: TrackReviewService,
    private router: Router, private toastr: ToastrService) { }  
   
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.service.trackReviewForm.reset();

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
    this.service.createTrackReview().subscribe(res => {
      this.router.navigateByUrl('admin/track-review-list');
      this.toastr.success('New track review created!','Creation successful')
    });
  }
}

