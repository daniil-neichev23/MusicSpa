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
import { AlbumReviewService } from 'src/app/_services/entity-services/album-review-service';

@Component({  
  selector: 'app-album-review-create',  
  templateUrl: './album-review-create.component.html',  
  styleUrls: ['./album-review-create.component.css']  
})  
export class AlbumReviewCreateComponent implements OnInit {  

  constructor(public service: AlbumReviewService,
    private router: Router, private toastr: ToastrService) { }  
   
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    // this.getLabelData();
    // this.getArtistData(); 
  } 
  
//   getAlbumReviewData() {  
//     this.service.getAllArtists().subscribe((data: any[]) => {  
//         this.artistArray = data;  
//       }) 
//   }  
//   getLabelData() {  
//     this.labelservice.getAllLabels().subscribe((data: any[]) => {  
//         this.labelArray = data;
//       }) 
//   }  

  onSubmit() {
    this.service.createAlbumReview().subscribe(res => {
      this.router.navigateByUrl('admin/album-review-list');
      this.toastr.success('New album review created!','Creation successful')
    });
  }
}