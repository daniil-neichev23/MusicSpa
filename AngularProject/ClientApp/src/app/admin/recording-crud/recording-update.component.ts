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
import { GenreService } from 'src/app/_services/entity-services/genre-service';

@Component({  
  selector: 'app-recording-update',  
  templateUrl: './recording-update.component.html',  
  styleUrls: ['./recording-update.component.css']  
})  
export class RecordingUpdateComponent implements OnInit {  

  constructor(public service: RecordingService, private albumservice:AlbumService, private genreservice:GenreService,
    private router: Router, private toastr: ToastrService, private route:ActivatedRoute) { }  
    id: string;
    recording:any;
albumArray:any[];
genreArray:any[];
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.id = this.route.snapshot.params['recordingId'];
    // console.log(this.id);
    this.getAlbumData();
    this.getGenreData(); 
    this.service.getRecordingById(this.id).subscribe((data: any) => {
        this.recording = data;
        this.service.recordingForm.patchValue({
        Title: this.recording.title,
        TrackNumber: this.recording.trackNumber,
        Length: this.recording.length
          });
        });
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
    this.service.updateRecording( ).subscribe(res => {
      this.router.navigateByUrl('admin/recording-list');
      this.toastr.success('Recording was updated!','Success')
    });
  }
}