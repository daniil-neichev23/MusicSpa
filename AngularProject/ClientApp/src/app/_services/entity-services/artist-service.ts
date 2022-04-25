import { Injectable } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
  export class ArtistService {
  
    constructor(private http: HttpClient, private fb:FormBuilder) { }
  public art: Artist;
  dataSource: any;
    readonly baseURL = 'https://localhost:44391/api/Artist';
    readonly baseAlbumURL = 'https://localhost:44391/api/Album';
    readonly baseLabelURL = 'https://localhost:44391/api/Label';
  
    httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json'  
      })  
    }  
  
  
    
  
    getArtistsWithEntities() :Observable<any[]>{
        return this.http.get<any[]>(this.baseURL + '/ReadList').pipe(catchError(this.errorHandler));
    }
  
    getAllArtists(): Observable<Artist[]> {  
      return this.http.get<Artist[]>(this.baseURL + '/Read').pipe(catchError(this.errorHandler));  
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
  
    artistForm = this.fb.group({  
      Id: [''],  
      Name: [""],
      
    });
  
  getArtistById(id): Observable<any> {
      return this.http.get<any>(this.baseURL + '/GetById/?id=' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    createArtist(): Observable<Artist> {
        var body ={
            Name: this.artistForm.value.Name
        }
      return this.http.post<Artist>(this.baseURL + '/Create/',body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    updateArtist( ): Observable<Artist> {
      var body ={
          Id: this.artistForm.value.Id,
          Name: this.artistForm.value.Name
      }
      console.log(body.Id);
      return this.http.put<Artist>(this.baseURL + '/Update/?' + body.Id, body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
     
    deleteArtist(artistId) {  
      // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return this.http.delete(this.baseURL + '/Delete?id=' + artistId);  
    }
}