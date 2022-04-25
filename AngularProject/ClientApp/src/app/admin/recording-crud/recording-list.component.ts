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
import { ToastrService } from 'ngx-toastr';

@Component({  
  selector: 'app-recording-list',  
  templateUrl: './recording-list.component.html',  
  styleUrls: ['./recording-list.component.css']  
})  
export class RecordingListComponent implements OnInit {  
  title = 'Recording CRUD';  
  Data: any[];  
  isLoading = true;

  constructor(public service: RecordingService, private router:Router, private toastr: ToastrService) {
 }  
  
  ngOnInit(): void {  
   this.getRecordingData();
  }  

  getRecordingData() {  
    this.service.getRecordingsWithEntities().subscribe((data: any) => {  
      this.isLoading = false;
        this.Data = data;  
        console.log(this.Data);
      }) 
  }  
  
  deleteData(id) {  
    this.service.deleteRecording(id).subscribe((data: any[]) => {  
      this.getRecordingData();  
      this.toastr.error('Recording was deleted!')

    })  
  } 
}