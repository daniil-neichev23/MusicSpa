import { Component, OnInit } from '@angular/core';  
import {AlbumService} from 'src/app/_services/entity-services/album-service';  
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';   
import { Artist } from 'src/app/models/artist';
import { Label } from 'src/app/models/label';
import { Album } from 'src/app/models/album';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { GroupMemberService } from 'src/app/_services/entity-services/group-member-service';
import { ToastrService } from 'ngx-toastr';

@Component({  
  selector: 'app-group-member-list',  
  templateUrl: './group-member-list.component.html',  
  styleUrls: ['./group-member-list.component.css']  
})  
export class GroupMemberListComponent implements OnInit {  
  title = 'Group Member CRUD';  
  Data: any[];  
  isLoading = true;

  constructor(public service: GroupMemberService, private router:Router, private toastr:ToastrService) {
 }  
  
  ngOnInit(): void {  
   this.getGroupMemberData();
  }  

  getGroupMemberData() {  
    this.service.getGroupMembersWithEntities().subscribe((data: any) => {  
      this.isLoading = false;
        this.Data = data;  
        console.log(this.Data);
      }) 
  }  
  
  deleteData(id) {  
    this.service.deleteGroupMember(id).subscribe((data: any[]) => {  
      this.getGroupMemberData();  
      this.toastr.error('Group member was deleted!')

    })  
  } 
}