import { Component, OnInit } from '@angular/core';  
import {AlbumService} from 'src/app/_services/entity-services/album-service';  
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';   
import { Artist } from 'src/app/models/artist';
import { Label } from 'src/app/models/label';
import { Album } from 'src/app/models/album';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ArtistService } from 'src/app/_services/entity-services/artist-service';
import { ToastrService } from 'ngx-toastr';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({  
  selector: 'app-artist-list',  
  templateUrl: './artist-list.component.html',  
  styleUrls: ['./artist-list.component.css']  
})  
export class ArtistListComponent implements OnInit {  
  title = 'Artist CRUD';  
  Data: any[];  
  isLoading = true;
  closeModal:string;

  constructor(public service: ArtistService, private router:Router, private toastr: ToastrService,private modalService: NgbModal) { }  
  
  ngOnInit(): void {  
   this.getArtistData();
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

  getArtistData() {  
    this.service.getArtistsWithEntities().subscribe((data: any) => {  
      this.isLoading = false;
        this.Data = data;  
        console.log(this.Data);
      }) 
  }  
  
  deleteData(id) {  
    this.service.deleteArtist(id).subscribe((data: any[]) => {  
      this.getArtistData();  
      this.toastr.error('Artist was deleted!')

    })  
  } 
}