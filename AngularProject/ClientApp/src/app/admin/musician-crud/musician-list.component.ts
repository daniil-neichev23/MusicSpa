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
import { ToastrService } from 'ngx-toastr';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({  
  selector: 'app-musician-list',  
  templateUrl: './musician-list.component.html',  
  styleUrls: ['./musician-list.component.css']  
})  
export class MusicianListComponent implements OnInit {  
  title = 'Musician CRUD';  
  Data: any[];  
  isLoading = true;
  closeModal:string;

  constructor(public service: MusicianService, private router:Router, private toastr:ToastrService,private modalService: NgbModal) {
 }  
  
  ngOnInit(): void {  
   this.getMusicianData();
  }  

  triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getMusicianData() {  
    this.service.getMusiciansWithEntities().subscribe((data: any) => {  
      this.isLoading = false;
        this.Data = data;  
        console.log(this.Data);
      }) 
  }  
  
  deleteData(id) {  
    this.service.deleteMusician(id).subscribe((data: any[]) => {  
      this.getMusicianData();  
      this.toastr.error('Musician was deleted!')

    })  
  } 
}