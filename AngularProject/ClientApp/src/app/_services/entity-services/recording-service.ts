import { Injectable } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { AlbumReview } from 'src/app/models/album-review';
import { Recording } from 'src/app/models/recording';

@Injectable({
    providedIn: 'root'
  })
  export class RecordingService {
  
    constructor(private http: HttpClient, private fb:FormBuilder) { }
  public rec: Recording;
  dataSource: any;
    readonly baseURL = 'https://localhost:44391/api/Recording';
  
    httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json'  
      })  
    }  
  
  
    
  
    getRecordingsWithEntities() :Observable<any[]>{
        return this.http.get<any[]>(this.baseURL + '/ReadList').pipe(catchError(this.errorHandler));
    }
  
    getAllRecordings(): Observable<Recording[]> {  
      return this.http.get<Recording[]>(this.baseURL + '/Read').pipe(catchError(this.errorHandler));  
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
  
    recordingForm = this.fb.group({  
      Id: [''],  
      TrackNumber: [""],
      Title:[''],
      Length:[''],
        AlbumId:[''],
        GenreId:['']
    });
  
  getRecordingById(id): Observable<any> {
      return this.http.get<any>(this.baseURL + '/GetById/?id=' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    createRecording(): Observable<Recording> {
        var body ={
            Title: this.recordingForm.value.Title,
            TrackNumber: this.recordingForm.value.TrackNumber,
            Length: this.recordingForm.value.Length,
            AlbumId:this.recordingForm.value.AlbumId,
            GenreId:this.recordingForm.value.GenreId
        }
      return this.http.post<Recording>(this.baseURL + '/Create/',body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    updateRecording( ): Observable<Recording> {
      var body ={
          Id: this.recordingForm.value.Id,
          TrackNumber: this.recordingForm.value.TrackNumber,
            Title: this.recordingForm.value.Title,
            Length: this.recordingForm.value.Length,
            AlbumId:this.recordingForm.value.AlbumId,
            GenreId:this.recordingForm.value.GenreId
      }
      console.log(body.Id);
      return this.http.put<Recording>(this.baseURL + '/Update/?' + body.Id, body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
     
    deleteRecording(recordingId) {  
      // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return this.http.delete(this.baseURL + '/Delete?id=' + recordingId);  
    }
}