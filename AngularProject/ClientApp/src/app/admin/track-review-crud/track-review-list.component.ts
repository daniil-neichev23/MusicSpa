import { Component, OnInit } from '@angular/core';  
import {AlbumService} from 'src/app/_services/entity-services/album-service';  
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';   
import { Artist } from 'src/app/models/artist';
import { Label } from 'src/app/models/label';
import { Album } from 'src/app/models/album';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ArtistService } from 'src/app/_services/entity-services/artist-service';
import { MusicianService } from 'src/app/_services/entity-services/musician-service';
import { RecordingService } from 'src/app/_services/entity-services/recording-service';
import { ReviewerService } from 'src/app/_services/entity-services/reviewer-service';
import { TrackReviewService } from 'src/app/_services/entity-services/track-review-service';
import { ToastrService } from 'ngx-toastr';

@Component({  
  selector: 'app-track-review-list',  
  templateUrl: './track-review-list.component.html',  
  styleUrls: ['./track-review-list.component.css']  
})  
export class TrackReviewListComponent implements OnInit {  
  title = 'Track Review CRUD';  
  Data: any[];  
  isLoading= true;

  constructor(public service: TrackReviewService, private router:Router, private toastr: ToastrService) {
 }  
  
  ngOnInit(): void {  
   this.getTrackReviewData();
  }  

  getTrackReviewData() {  
    this.service.getTrackReviewsWithEntities().subscribe((data: any) => {  
      this.isLoading = false;
        this.Data = data;  
        console.log(this.Data);
      }) 
  }  
  
  deleteData(id) {  
    this.service.deleteTrackReview(id).subscribe((data: any[]) => {  
      this.getTrackReviewData();  
      this.toastr.error('Track review was deleted!')

    })  
  } 
}