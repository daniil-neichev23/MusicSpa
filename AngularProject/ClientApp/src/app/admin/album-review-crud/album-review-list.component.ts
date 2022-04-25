import { Component, OnInit } from '@angular/core';  
import {AlbumService} from 'src/app/_services/entity-services/album-service';  
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';   
import { Artist } from 'src/app/models/artist';
import { Label } from 'src/app/models/label';
import { Album } from 'src/app/models/album';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AlbumReviewService } from 'src/app/_services/entity-services/album-review-service';
import { ToastrService } from 'ngx-toastr';

@Component({  
  selector: 'app-album-review-list',  
  templateUrl: './album-review-list.component.html',  
  styleUrls: ['./album-review-list.component.css']  
})  
export class AlbumReviewListComponent implements OnInit {  
  title = 'AlbumReview CRUD';  
  Data: any[];  
isLoading = true;

  constructor(public service: AlbumReviewService, private router:Router, private toastr:ToastrService) {
 }  
  
  ngOnInit(): void {  
   this.getAlbumReviewData();
  }  

  getAlbumReviewData() {  
    this.service.getAlbumReviewsWithEntities().subscribe((data: any) => {  
      this.isLoading = false;
        this.Data = data;  
        console.log(this.Data);
      }) 
  }  
  
  deleteData(id) {  
    this.service.deleteAlbumReview(id).subscribe((data: any[]) => {  
      this.getAlbumReviewData();  
      this.toastr.error('Album review was deleted!')

    })  
  } 
}