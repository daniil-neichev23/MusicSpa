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

@Component({  
  selector: 'app-album-update',  
  templateUrl: './album-update.component.html',  
  styleUrls: ['./album-update.component.css']  
})  
export class AlbumUpdateComponent implements OnInit {  
  artistArray: Artist[];
  labelArray: Label[];
  id: string;
  album: any;
  artist: any;
  label: any;
  artistName: any;
  labelName: any;

  constructor(public service: AlbumService, private artistservice: ArtistService, private labelservice: LabelService,
    private router: Router, private toastr: ToastrService, private route:ActivatedRoute) { }  
   
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.id = this.route.snapshot.params['albumId'];
    console.log(this.id);
    this.getLabelData();
    this.getArtistData(); 
    this.service.getAlbumById(this.id).subscribe((data: Album) => {
        this.album = data;
        // console.log(this.album);
        // this.artistservice.getArtistById(this.album.artistId).subscribe((d: Artist)=>{
        //     this.artist=d;
        //     this.artistName  = this.artist.id;
            
        //     console.log(this.artist.name);
        // });
        // this.labelservice.getLabelById(this.album.labelId).subscribe((l: Label)=>{
        //   this.label = l;
        //     this.labelName = this.label.id;
        // });
        this.service.albumForm.patchValue({
            Title: this.album.title,
            Year: this.album.year,
            // ArtistId: this.artistName,
            // LabelId: this.labelName
        });
      });
  } 
  
  getArtistData() {  
    this.artistservice.getAllArtists().subscribe((data: any[]) => {  
        this.artistArray = data;  
      }) 
  }  
  getLabelData() {  
    this.labelservice.getAllLabels().subscribe((data: any[]) => {  
        this.labelArray = data;
      }) 
  }  
  

  onSubmit() {
    this.service.updateAlbum( ).subscribe(res => {
      this.router.navigateByUrl('admin/album-list');
      this.toastr.success('Album was updated!','Success');
    });
  }

  // Save() {   
  //   this.submitted = true;  
    
  //    if (this.service.albumForm.invalid) {  
  //           return;  
  //    }  
  //   this.service.createAlbum(this.service.albumForm.value).subscribe((data: Album) => {  
  //     this.data = data;  
  //     this.resetForm();  
  
  //   })  
  // }  
  // Update() {   
  //   this.submitted = true;  
    
  //   if (this.service.albumForm.invalid) {  
  //    return;  
  //   }        
  //   this.service.updateAlbum(this.service.albumForm.value.Id, this.service.albumForm.value).subscribe((data: any[]) => {  
  //     this.data = data;  
  //     this.resetForm();  
  //   })  
  // }  
  
  // EditData(Data) {  
  //   this.service.albumForm.controls["Id"].setValue(Data.Id);  
  //   this.service.albumForm.controls["Title"].setValue(Data.Title);      
  //   this.service.albumForm.controls["Year"].setValue(Data.Year);  
  //   this.service.albumForm.controls["Artist"].setValue(Data.ArtistId);  
  //   this.service.albumForm.controls["Label"].setValue(Data.LabelId);  
  //   this.EventValue = "Update";  
  // }  
  
  // resetForm()  
  // {     
  //   this.getAlbumData();  
  //   this.service.albumForm.reset();  
  //   this.EventValue = "Save";  
  //   this.submitted = false;   
  // }  
}
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';  
// import { AlbumService } from 'src/app/_services/entity-services/album-service';
// import { Album } from 'src/app/models/album';
// import { ToastrService } from 'ngx-toastr';
// import { Observable } from 'rxjs';  
// import { Router } from '@angular/router';
// import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';  
// import { MatDialog } from '@angular/material/dialog';  
// import { MatTableDataSource, } from '@angular/material/table';  
// import { MatPaginator } from '@angular/material/paginator';  
// import { MatSort } from '@angular/material/sort';  
// import { SelectionModel } from '@angular/cdk/collections';  

// interface Artist {  
//     Id: string;  
//     Name: string;  
//   }  
//   interface Label {  
//     Id: string;  
//     Name: string;  
//   }  

// @Component({
//   selector: 'app-album-crud',
//   templateUrl: './album.component.html',
//   styles: []
// })

// export class AlbumComponent implements OnInit {
    
    

//     dataSaved = false;  
//     albumForm: any;  
//     allAlbums: Observable<Album[]>;  
//     dataSource: MatTableDataSource<Album>;  
//     selection = new SelectionModel<Album>(true, []);  
//     albumIdUpdate = null;  
//     massage = null;  
//     allArtist: Observable<Artist[]>;  
//     allLabel: Observable<Label[]>;  
//     ArtistId = null;  
//     LabelId = null; 
//     SelectedDate = null;  
//     isMale = true;  
//     isFeMale = false;  
//     horizontalPosition: MatSnackBarHorizontalPosition = 'center';  
//     verticalPosition: MatSnackBarVerticalPosition = 'bottom';  
//     displayedColumns: string[] = ['select', 'Title', 'Year', 'Artist', 'Label', 'Edit', 'Delete'];  
//     @ViewChild(MatPaginator) paginator: MatPaginator;  
//     @ViewChild(MatSort) sort: MatSort; 



//   constructor(private formbuilder:FormBuilder, public service: AlbumService,
//     private toastr: ToastrService,  private _snackBar: MatSnackBar, public dialog: MatDialog) {
//         this.service.getAllAlbum().subscribe(data => {  
//         this.dataSource = new MatTableDataSource(data);  
//         this.dataSource.paginator = this.paginator;  
//         this.dataSource.sort = this.sort;  
//       }
//       );
//     }

//   ngOnInit(): void {
//     this.albumForm = this.formbuilder.group({  
//         Title: ['', [Validators.required]],  
//         Year: ['', [Validators.required]],  
//         Artist: ['', [Validators.required]],  
//         Label: ['', [Validators.required]]
//       });  
//       this.FillArtistDDL();  
//       this.FillLabelDDL();
//       this.loadAllAlbums();  
//       this.dataSource.paginator = this.paginator;  
//       this.dataSource.sort = this.sort;  
//   }

//   isAllSelected() {  
//     const numSelected = this.selection.selected.length;  
//     const numRows = !!this.dataSource && this.dataSource.data.length;  
//     return numSelected === numRows;  
//   }  

//   masterToggle() {  
//     this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(r => this.selection.select(r));  
//   } 

//   checkboxLabel(row: Album): string {  
//     if (!row) {  
//       return `${this.isAllSelected() ? 'select' : 'deselect'} all`;  
//     }  
//     return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id + 1}`;  
//   }  

//   applyFilter(filterValue: string) {  
//     this.dataSource.filter = filterValue.trim().toLowerCase();  
   
//     if (this.dataSource.paginator) {  
//       this.dataSource.paginator.firstPage();  
//     }  
//   }  

//   loadAllAlbums() {  
//     this.service.getAllAlbum().subscribe(data => {  
//       this.dataSource = new MatTableDataSource(data);  
//       this.dataSource.paginator = this.paginator;  
//       this.dataSource.sort = this.sort;  
//     });  
//   }  

//   onFormSubmit() {  
//     this.dataSaved = false;  
//     const album = this.albumForm.value;  
//     this.CreateAlbum(album);  
//     this.albumForm.reset();  
//     this.toastr.success("Created successfully!");
//   }  

//   loadAlbumToEdit(albumId: string) {  
//     this.service.getAlbumById(albumId).subscribe(album => {  
//       this.massage = null;  
//       this.dataSaved = false;  
//       this.albumIdUpdate = album.Id;  
//       this.albumForm.controls['Title'].setValue(album.Title);  
//       this.albumForm.controls['Year'].setValue(album.Year);  
//       this.albumForm.controls['Artist'].setValue(album.ArtistId);  
//       this.albumForm.controls['Label'].setValue(album.LabelId);
//     });
//   }  

//   CreateAlbum(album: Album) {  
//     console.log(album.Title);  
//     if (this.albumIdUpdate == null) {  
//       album.ArtistId = this.ArtistId;  
//       album.LabelId = this.LabelId;  
   
//       this.service.createAlbum(album).subscribe(  
//         () => {  
//           this.dataSaved = true;  
//           this.SavedSuccessful(1);  
//           this.loadAllAlbums();  
//           this.albumIdUpdate = null;  
//           this.albumForm.reset();  
//         }  
//       );  
//     } else {  
//       album.Id = this.albumIdUpdate;  
//       album.ArtistId = this.ArtistId;  
//       album.LabelId = this.LabelId;   
//       this.service.updateAlbum(album).subscribe(() => {  
//         this.dataSaved = true;  
//         this.SavedSuccessful(0);  
//         this.loadAllAlbums();  
//         this.albumIdUpdate = null;  
//         this.albumForm.reset();  
//       });  
//     }  
//   }  

//   deleteAlbum(albumId: string) {  
//     if (confirm("Are you sure you want to delete this ?")) {  
//       this.service.deleteAlbum(albumId).subscribe(() => {  
//         this.dataSaved = true;  
//         this.SavedSuccessful(2);  
//         this.loadAllAlbums();  
//         this.albumIdUpdate = null;  
//         this.albumForm.reset();  
   
//       });  
//     }  
   
//   }  

//   FillArtistDDL() {  
//     this.allArtist = this.service.getAllArtist(); 
//   }  
   
//   FillLabelDDL() {  
//     this.allLabel = this.service.getAllLabel(); 
//   }  
   
//   GetSelectedArtist(Artist) {  
//     this.ArtistId = Artist.value;  
//   }  
   
//   GetSelectedLabel(Label){
//       this.LabelId=Label.value;
//   }

//   resetForm() {  
//     this.albumForm.reset();  
//     this.massage = null;  
//     this.dataSaved = false;  
//     this.loadAllAlbums();  
//   }  
   
//   SavedSuccessful(isUpdate) {  
//     if (isUpdate == 0) {  
//       this._snackBar.open('Record Updated Successfully!', 'Close', {  
//         duration: 2000,  
//         horizontalPosition: this.horizontalPosition,  
//         verticalPosition: this.verticalPosition,  
//       });  
//     }  
//     else if (isUpdate == 1) {  
//       this._snackBar.open('Record Saved Successfully!', 'Close', {  
//         duration: 2000,  
//         horizontalPosition: this.horizontalPosition,  
//         verticalPosition: this.verticalPosition,  
//       });  
//     }  
//     else if (isUpdate == 2) {  
//       this._snackBar.open('Record Deleted Successfully!', 'Close', {  
//         duration: 2000,  
//         horizontalPosition: this.horizontalPosition,  
//         verticalPosition: this.verticalPosition,  
//       });  
//     }  
//   }  
// }

// //   populateForm(selectedRecord: Album) {
// //     this.service.formData = Object.assign({}, selectedRecord);
// //   }

// //   onDelete(id: string) {
// //     if (confirm('Are you sure to delete this record?')) {
// //       this.service.deleteAlbum(id)
// //         .subscribe(
// //           res => {
// //             this.service.refreshList();
// //             this.toastr.error("Deleted successfully", 'Album Register');
// //           },
// //           err => { console.log(err) }
// //         )
// //     }
// //   }

