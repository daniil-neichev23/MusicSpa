import { Injectable } from '@angular/core';
import { Album } from 'src/app/models/album';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Artist } from 'src/app/models/artist';
import { Label } from 'src/app/models/label';
import { FormBuilder, Validators } from '@angular/forms';
import { map, catchError } from "rxjs/operators";
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { AlbumListComponent } from 'src/app/admin/album-crud/album-list.component';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient, private fb:FormBuilder) { }
public alb: Album;
dataSource: any;
  readonly baseURL = 'https://localhost:44391/api/Album';
  readonly baseArtistURL = 'https://localhost:44391/api/Artist';
  readonly baseLabelURL = 'https://localhost:44391/api/Label';

  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type':'application/json',
      // 'Authorization':`Bearer ${sessionStorage.getItem("token")}`
    })  
  }  


  getAllAlbum(): Observable<Album[]> {  
    return this.http.get<Album[]>(this.baseURL + '/Read', ).pipe(catchError(this.errorHandler));  
  } 

  getAlbumsWithEntities() {
    console.log(this.httpOptions);
      return this.http.get(this.baseURL + '/ReadList',).pipe(catchError(this.errorHandler));
  }

  getAllArtist(): Observable<Artist[]> {  
    return this.http.get<Artist[]>(this.baseArtistURL + '/Read').pipe(catchError(this.errorHandler));  
  }  

  errorHandler(error) {
    let errorMessage = '';
 
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getAllLabel(): Observable<Label[]>{  
    return this.http.get<Label[]>(this.baseLabelURL + '/Read').pipe(catchError(this.errorHandler));  
  }  

  albumForm = this.fb.group({  
    Id: [''],  
    Title: [""],
    // ,Validators.required],        
    Year: [""],
    // ,Validators.required],  
    ArtistId:[""],
    // ,Validators.required],  
    LabelId: [""],
    // ,Validators.required],  
  });

getAlbumById(id): Observable<any> {
    return this.http.get<any>(this.baseURL + '/GetById/?id=' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }
 
  createAlbum(): Observable<Album> {
      var body ={
          Title: this.albumForm.value.Title,
          Year: this.albumForm.value.Year,
          ArtistId: this.albumForm.value.ArtistId,
          LabelId: this.albumForm.value.LabelId
      }
    return this.http.post<Album>(this.baseURL + '/Create/',body)
      .pipe(
        catchError(this.errorHandler)
      );
  }
 
  updateAlbum( ): Observable<Album> {
    var body ={
        Id: this.albumForm.value.Id,
        Title: this.albumForm.value.Title,
        Year: this.albumForm.value.Year,
        ArtistId: this.albumForm.value.ArtistId,
        LabelId: this.albumForm.value.LabelId
    }
    console.log(body.Id);
    return this.http.put<Album>(this.baseURL + '/Update/?' + body.Id, body)
      .pipe(
        catchError(this.errorHandler)
      );
  }
   
  deleteAlbum(albumId) {  
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.delete(this.baseURL + '/Delete?id=' + albumId);  
  }
//   createAlbum() {
//     return this.http.post(`${this.baseURL}/Create`, this.formData);
//   }

//   updateAlbum() {
//     return this.http.post(`${this.baseURL}/Update/${this.formData.Id}`, this.formData);
//   }

//   deleteAlbum(id: string) {
//     return this.http.delete(`${this.baseURL}/Delete/?id=${id}`);
//   }

//   refreshList() {
//     this.http.get(this.baseURL+'/Read')
//       .toPromise()
//       .then(res =>this.list = res as Album[]);
//   }

//   getAlbum(id: string){
//     return this.http.get(`${this.baseURL}/GetById/?id=${id}`);
//   }


}