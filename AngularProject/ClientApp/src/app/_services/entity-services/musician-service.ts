import { Injectable } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { AlbumReview } from 'src/app/models/album-review';
import { Musician } from 'src/app/models/musician';

@Injectable({
    providedIn: 'root'
  })
  export class MusicianService {
  
    constructor(private http: HttpClient, private fb:FormBuilder) { }
  public mus: Musician;
  dataSource: any;
    readonly baseURL = 'https://localhost:44391/api/Musician';
  
    httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json'  
      })  
    }  
  
  
    
  
    getMusiciansWithEntities() :Observable<any[]>{
        return this.http.get<any[]>(this.baseURL + '/ReadList').pipe(catchError(this.errorHandler));
    }
  
    getAllMusicians(): Observable<Musician[]> {  
      return this.http.get<Musician[]>(this.baseURL + '/Read').pipe(catchError(this.errorHandler));  
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
  
    musicianForm = this.fb.group({  
      Id: [''],  
      LastName: [""],
      FirstName:[''],
      BirthDate:[''],
      BirthPlace:['']
    });
  
  getMusicianById(id): Observable<any> {
      return this.http.get<any>(this.baseURL + '/GetById/?id=' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    createMusician(): Observable<Musician> {
        var body ={
            LastName: this.musicianForm.value.LastName,
            FirstName: this.musicianForm.value.FirstName,
            BirthDate: this.musicianForm.value.BirthDate,
            BirthPlace:this.musicianForm.value.BirthPlace
        }
      return this.http.post<Musician>(this.baseURL + '/Create/',body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    updateMusician( ): Observable<Musician> {
      var body ={
          Id: this.musicianForm.value.Id,
          LastName: this.musicianForm.value.LastName,
            FirstName: this.musicianForm.value.FirstName,
            BirthDate: this.musicianForm.value.BirthDate,
            BirthPlace:this.musicianForm.value.BirthPlace
      }
      console.log(body.Id);
      return this.http.put<Musician>(this.baseURL + '/Update/?' + body.Id, body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
     
    deleteMusician(musicianId) {  
      // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return this.http.delete(this.baseURL + '/Delete?id=' + musicianId);  
    }
}