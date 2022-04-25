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
import { GenreService } from 'src/app/_services/entity-services/genre-service';

@Component({  
  selector: 'app-genre-update',  
  templateUrl: './genre-update.component.html',  
  styleUrls: ['./genre-update.component.css']  
})  
export class GenreUpdateComponent implements OnInit {  

  constructor(public service: GenreService, private albumservice: AlbumService, private labelservice: LabelService,
    private router: Router, private toastr: ToastrService, private route:ActivatedRoute) { }  
    id: string;
genre:any;
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.id = this.route.snapshot.params['genreId'];
    // console.log(this.id);
    // this.getLabelData();
    // this.getArtistData(); 
    this.service.getGenreById(this.id).subscribe((data: any) => {
        this.genre = data;
        this.service.genreForm.patchValue({
            Name: this.genre.name,
        });
      });
  } 
  
//   getArtistData() {  
//     this.artistservice.getAllArtists().subscribe((data: any[]) => {  
//         this.artistArray = data;  
//       }) 
//   }  
//   getLabelData() {  
//     this.labelservice.getAllLabels().subscribe((data: any[]) => {  
//         this.labelArray = data;
//       }) 
//   }  
  

  onSubmit() {
    this.service.updateGenre( ).subscribe(res => {
      this.router.navigateByUrl('admin/genre-list');
      this.toastr.success('Artist was updated!','Success')
    });
  }
}