import { Component, HostListener, OnInit } from '@angular/core';  
import {AlbumService} from 'src/app/_services/entity-services/album-service';  
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';   
import { Artist } from 'src/app/models/artist';
import { Label } from 'src/app/models/label';
import { Album } from 'src/app/models/album';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({  
  selector: 'app-album-list',  
  templateUrl: './album-list.component.html',  
  styleUrls: ['./album-list.component.css']  
})  
export class AlbumListComponent implements OnInit {  
  title = 'Album CRUD';  
  Data: any[];  
  isLoading= true;
closeModal:string;

  constructor(public service: AlbumService, private router:Router, private toastr: ToastrService,  private modalService: NgbModal) {
 }  
  
  ngOnInit(): void {  
   this.getAlbumData();
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
//  modal = document.getElementById("myModal");

// // Get the button that opens the modal
//  btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
//  span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// @HostListener('button:click', ['$event'])
// onDocumentClick() {
//   this.modal.style.display = "block";
//   }
//   @HostListener('span:click', ['$event'])
// onSpanClick() {
//   this.modal.style.display = "none";
//   }
//   @HostListener('document:click', ['$event'])
// onWindowClick(event: MouseEvent) {
//     if (event.target == this.modal) {
//       this.modal.style.display = "none";
//     }
//   }


  getAlbumData() {  
    this.service.getAlbumsWithEntities().subscribe((data: any) => {  
        this.isLoading = false;
        this.Data = data;  
        console.log(this.Data);
      }) 
  }  
  
  deleteData(id) {  
    this.service.deleteAlbum(id).subscribe((data: any[]) => {  
    //   this.Data = data;  
      this.getAlbumData(); 
      this.toastr.error('Album was deleted!')
 
    })  
  } 
}