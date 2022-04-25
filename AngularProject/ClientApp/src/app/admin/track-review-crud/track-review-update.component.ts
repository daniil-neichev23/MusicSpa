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
import { MusicianService } from 'src/app/_services/entity-services/musician-service';
import { RecordingService } from 'src/app/_services/entity-services/recording-service';
import { ReviewerService } from 'src/app/_services/entity-services/reviewer-service';
import { TrackReviewService } from 'src/app/_services/entity-services/track-review-service';

@Component({  
  selector: 'app-track-review-update',  
  templateUrl: './track-review-update.component.html',  
  styleUrls: ['./track-review-update.component.css']  
})  
export class TrackReviewUpdateComponent implements OnInit {  

  constructor(public service: TrackReviewService,
    private router: Router, private toastr: ToastrService, private route:ActivatedRoute) { }  
    id: string;

  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.id = this.route.snapshot.params['trackReviewId'];
    // console.log(this.id);
    // this.getLabelData();
    // this.getArtistData(); 
    // this.service.getAlbumById(this.id).subscribe((data: any) => {
    //     this.album = data;
    //     console.log(data);
    //     console.log(this.album);
    //     this.service.albumForm.patchValue(data);
    //   });
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
    this.service.updateTrackReview( ).subscribe(res => {
      this.router.navigateByUrl('admin/track-review-list');
      this.toastr.success('Track Review was updated!','Success')
    });
  }
}