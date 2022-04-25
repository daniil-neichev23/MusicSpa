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
import { AlbumReviewService } from 'src/app/_services/entity-services/album-review-service';

@Component({  
  selector: 'app-album-review-update',  
  templateUrl: './album-review-update.component.html',  
  styleUrls: ['./album-review-update.component.css']  
})  
export class AlbumReviewUpdateComponent implements OnInit {  
  id: string;
  albumReview: any;

  constructor(public service: AlbumReviewService, private artistservice: ArtistService, private labelservice: LabelService,
    private router: Router, private toastr: ToastrService, private route:ActivatedRoute) { }  
   
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.id = this.route.snapshot.params['albumReviewId'];
    // console.log(this.id);
    // this.service.getAlbumReviewById(this.id).subscribe((data: any) => {
    //     this.albumReview = data;
    //     this.service.albumReviewForm.patchValue({

    //     });
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
    this.service.updateAlbumReview( ).subscribe(res => {
      this.router.navigateByUrl('admin/album-review-list');
      this.toastr.success('Album Review was updated!','Success')
    });
  }
}