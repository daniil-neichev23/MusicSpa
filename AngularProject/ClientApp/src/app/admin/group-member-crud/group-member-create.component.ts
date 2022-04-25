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
import { GroupMemberService } from 'src/app/_services/entity-services/group-member-service';
import { Musician } from 'src/app/models/musician';
import { MusicianService } from 'src/app/_services/entity-services/musician-service';

@Component({  
  selector: 'app-group-member-create',  
  templateUrl: './group-member-create.component.html',  
  styleUrls: ['./group-member-create.component.css']  
})  
export class GroupMemberCreateComponent implements OnInit { 
    musicianArray: Musician[]; 
    artistArray: Artist[];

  constructor(public service: GroupMemberService, private artistservice: ArtistService, private musicianservice: MusicianService,
    private router: Router, private toastr: ToastrService) { }  
   
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
       this.getArtistData();
       this.getMusicianData();
       this.service.groupMemberForm.reset();
  } 

  getArtistData() {  
    this.artistservice.getAllArtists().subscribe((data: any[]) => {  
        this.artistArray = data;  
      }) 
  }  
  getMusicianData() {  
    this.musicianservice.getAllMusicians().subscribe((data: any[]) => {  
        this.musicianArray = data;
        console.log(this.musicianArray);
      }) 
  }  
  

  onSubmit() {
    this.service.createGroupMember().subscribe(res => {
      this.router.navigateByUrl('admin/group-member-list');
      this.toastr.success('New member created!','Creation successful')
    });
  }
}