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
import { ToastrService } from 'ngx-toastr';

@Component({  
  selector: 'app-reviewer-list',  
  templateUrl: './reviewer-list.component.html',  
  styleUrls: ['./reviewer-list.component.css']  
})  
export class ReviewerListComponent implements OnInit {  
  title = 'Reviewer CRUD';  
  Data: any[];  
  isLoading = true;

  constructor(public service: ReviewerService, private router:Router, private toastr:ToastrService) {
 }  
  
  ngOnInit(): void {  
   this.getReviewerData();
  }  

  getReviewerData() {  
    this.service.getReviewersWithEntities().subscribe((data: any) => {  
      this.isLoading = false;
        this.Data = data;  
        console.log(this.Data);
      }) 
  }  
  
  deleteData(id) {  
    this.service.deleteReviewer(id).subscribe((data: any[]) => {  
      this.getReviewerData();  
      this.toastr.error('Reviewer was deleted!')

    })  
  } 
}