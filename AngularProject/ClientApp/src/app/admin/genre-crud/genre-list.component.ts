import { Component, OnInit } from '@angular/core';  
import {AlbumService} from 'src/app/_services/entity-services/album-service';  
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';   
import { Artist } from 'src/app/models/artist';
import { Label } from 'src/app/models/label';
import { Album } from 'src/app/models/album';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ArtistService } from 'src/app/_services/entity-services/artist-service';
import { GenreService } from 'src/app/_services/entity-services/genre-service';
import { ToastrService } from 'ngx-toastr';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({  
  selector: 'app-genre-list',  
  templateUrl: './genre-list.component.html',  
  styleUrls: ['./genre-list.component.css']  
})  
export class GenreListComponent implements OnInit {  
  title = 'Genre CRUD';  
  Data: any[];  
  isLoading = true;
    closeModal:string;

  constructor(public service: GenreService, private router:Router, private toastr: ToastrService,private modalService: NgbModal) {
 }  
  
  ngOnInit(): void {  
   this.getGenreData();
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

  getGenreData() {  
    this.service.getGenresWithEntities().subscribe((data: any) => {  
      this.isLoading = false;
        this.Data = data;  
        console.log(this.Data);
      }) 
  }  
  
  deleteData(id) {  
    this.service.deleteGenre(id).subscribe((data: any[]) => {  
      this.getGenreData();  
      this.toastr.error('Genre was deleted!')

    })  
  } 
}