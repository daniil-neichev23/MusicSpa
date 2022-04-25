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
import { GroupMemberService } from 'src/app/_services/entity-services/group-member-service';
import { Musician } from 'src/app/models/musician';
import { MusicianService } from 'src/app/_services/entity-services/musician-service';

@Component({  
  selector: 'app-group-member-update',  
  templateUrl: './group-member-update.component.html',  
  styleUrls: ['./group-member-update.component.css']  
})  
export class GroupMemberUpdateComponent implements OnInit {  
  id: string;
  musicianArray: Musician[]; 
  artistArray: Artist[];
  album: any;
  groupmember:any;

  constructor(public service: GroupMemberService, private artistservice: ArtistService, private musicianservice: MusicianService,
    private router: Router, private toastr: ToastrService, private route:ActivatedRoute) { }  
   
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.id = this.route.snapshot.params['groupMemberId'];
    console.log(this.id);
    this.getArtistData();
    this.getMusicianData();
    this.service.getGroupMemberById(this.id).subscribe((data: any) => {
        this.groupmember = data;
        this.service.groupMemberForm.patchValue({
            Joined: this.groupmember.joined,
            Left: this.groupmember.left
        });
      });
  } 
  getArtistData() {  
    this.artistservice.getAllArtists().subscribe((data: any[]) => {  
        this.artistArray = data;  
      }) 
  }  
  getMusicianData() {  
    this.musicianservice.getAllMusicians().subscribe((data: any[]) => {  
        this.musicianArray = data;
      }) 
  }  
  

  onSubmit() {
    this.service.updateGroupMember( ).subscribe(res => {
      this.router.navigateByUrl('admin/group-member-list');
      this.toastr.success('Group Member was updated!','Success')
    });
  }
}