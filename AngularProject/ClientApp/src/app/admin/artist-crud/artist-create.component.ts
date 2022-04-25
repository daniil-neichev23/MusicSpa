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

@Component({  
  selector: 'app-artist-create',  
  templateUrl: './artist-create.component.html',  
  styleUrls: ['./artist-create.component.css']  
})  
export class ArtistCreateComponent implements OnInit {  

  constructor(public service: ArtistService,
    private router: Router, private toastr: ToastrService) { }  
   
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    // this.getLabelData();
    // this.getArtistData(); 
    this.service.artistForm.reset();
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
    this.service.createArtist().subscribe(res => {
      this.router.navigateByUrl('admin/artist-list');
      this.toastr.success('New artist created!','Creation successful')
    });
  }
}

