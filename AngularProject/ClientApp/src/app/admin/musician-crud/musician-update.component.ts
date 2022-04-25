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

@Component({  
  selector: 'app-musician-update',  
  templateUrl: './musician-update.component.html',  
  styleUrls: ['./musician-update.component.css']  
})  
export class MusicianUpdateComponent implements OnInit {  

  constructor(public service: MusicianService,
    private router: Router, private toastr: ToastrService, private route:ActivatedRoute) { }  
    id: string;
musician:any;
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.id = this.route.snapshot.params['musicianId'];
    // console.log(this.id);
    // this.getLabelData();
    // this.getArtistData(); 
    this.service.getMusicianById(this.id).subscribe((data: any) => {
        this.musician = data;
        this.service.musicianForm.patchValue({
            FirstName: this.musician.firstName,
            LastName: this.musician.lastName,
            BirthDate: this.musician.birthDate,
            BirthPlace: this.musician.birthPlace,
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
    this.service.updateMusician( ).subscribe(res => {
      this.router.navigateByUrl('admin/musician-list');
      this.toastr.success('Musician was updated!','Success')
    });
  }
}