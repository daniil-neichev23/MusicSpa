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
import { Recording } from 'src/app/models/recording';
import { GenreService } from 'src/app/_services/entity-services/genre-service';
import { Genre } from 'src/app/models/genre';

@Component({  
  selector: 'app-recording-create',  
  templateUrl: './recording-create.component.html',  
  styleUrls: ['./recording-create.component.css']  
})  
export class RecordingCreateComponent implements OnInit {  

    albumArray: Album[];
  genreArray: Genre[];

  constructor(public service: RecordingService, private albumservice:AlbumService, private genreservice: GenreService,
    private router: Router, private toastr: ToastrService) { }  
   
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.getAlbumData();
    this.getGenreData(); 
    this.service.recordingForm.reset();

  } 
  
  getAlbumData() {  
    this.albumservice.getAllAlbum().subscribe((data: any[]) => {  
        this.albumArray = data;  
      }) 
  }  
  getGenreData() {  
    this.genreservice.getAllGenres().subscribe((data: any[]) => {  
        this.genreArray = data;
      }) 
  }  

  onSubmit() {
    this.service.createRecording().subscribe(res => {
      this.router.navigateByUrl('admin/recording-list');
      this.toastr.success('New recording created!','Creation successful')
    });
  }
}

