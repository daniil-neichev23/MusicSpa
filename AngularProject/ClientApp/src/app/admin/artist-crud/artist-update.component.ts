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
  selector: 'app-artist-update',  
  templateUrl: './artist-update.component.html',  
  styleUrls: ['./artist-update.component.css']  
})  
export class ArtistUpdateComponent implements OnInit {  

  constructor(public service: ArtistService, private albumservice: AlbumService, private labelservice: LabelService,
    private router: Router, private toastr: ToastrService, private route:ActivatedRoute) { }  
    id: string;
artist:any;
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.id = this.route.snapshot.params['artistId'];
    // console.log(this.id);
    // this.getLabelData();
    // this.getArtistData(); 
    this.service.getArtistById(this.id).subscribe((data: any) => {
        this.artist = data;
        this.service.artistForm.patchValue({
            Name: this.artist.name,
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
    this.service.updateArtist( ).subscribe(res => {
      this.router.navigateByUrl('admin/artist-list');
      this.toastr.success('Artist was updated!','Success')
    });
  }
}