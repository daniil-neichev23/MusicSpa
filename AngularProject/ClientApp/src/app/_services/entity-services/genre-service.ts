import { Injectable } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { AlbumReview } from 'src/app/models/album-review';
import { Genre } from 'src/app/models/genre';

@Injectable({
    providedIn: 'root'
  })
  export class GenreService {
  
    constructor(private http: HttpClient, private fb:FormBuilder) { }
  public gen: Genre;
  dataSource: any;
    readonly baseURL = 'https://localhost:44391/api/Genre';
  
    httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json'  
      })  
    }  
  
  
    
  
    getGenresWithEntities() :Observable<any[]>{
        return this.http.get<any[]>(this.baseURL + '/ReadList').pipe(catchError(this.errorHandler));
    }
  
    getAllGenres(): Observable<Genre[]> {  
      return this.http.get<Genre[]>(this.baseURL + '/Read').pipe(catchError(this.errorHandler));  
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
  
    genreForm = this.fb.group({  
      Id: [''],  
      Name: [""],
    });
  
  getGenreById(id): Observable<any> {
      return this.http.get<any>(this.baseURL + '/GetById/?id=' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    createGenre(): Observable<Genre> {
        var body ={
            Name: this.genreForm.value.Name,
        }
      return this.http.post<Genre>(this.baseURL + '/Create/',body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    updateGenre( ): Observable<Genre> {
      var body ={
          Id: this.genreForm.value.Id,
          Name: this.genreForm.value.Name
        }
      console.log(body.Id);
      return this.http.put<Genre>(this.baseURL + '/Update/?' + body.Id, body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
     
    deleteGenre(genreId) {  
      // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return this.http.delete(this.baseURL + '/Delete?id=' + genreId);  
    }
}