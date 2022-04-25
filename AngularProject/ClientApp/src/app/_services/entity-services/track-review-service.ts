import { Injectable } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { AlbumReview } from 'src/app/models/album-review';
import { TrackReview } from 'src/app/models/track-review';

@Injectable({
    providedIn: 'root'
  })
  export class TrackReviewService {
  
    constructor(private http: HttpClient, private fb:FormBuilder) { }
  public trrev: TrackReview;
  dataSource: any;
    readonly baseURL = 'https://localhost:44391/api/TrackReview';
  
    httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json'  
      })  
    }  
  
  
    
  
    getTrackReviewsWithEntities() :Observable<any[]>{
        return this.http.get<any[]>(this.baseURL + '/ReadList').pipe(catchError(this.errorHandler));
    }
  
    getAllTrackReviews(): Observable<TrackReview[]> {  
      return this.http.get<TrackReview[]>(this.baseURL + '/Read').pipe(catchError(this.errorHandler));  
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
  
    trackReviewForm = this.fb.group({  
      Id: [''],  
      Ranking: [[1-5]],
      Comment:[''],
      RecordingId:[''],
        ReviewerId:['']
    });
  
  getAlbumReviewById(id): Observable<any> {
      return this.http.get<any>(this.baseURL + '/GetById/?id=' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    createTrackReview(): Observable<TrackReview> {
        var body ={
            Ranking: this.trackReviewForm.value.Ranking,
            Comment: this.trackReviewForm.value.Comment,
            ReviewerId: this.trackReviewForm.value.ReviewerId,
            RecordingId:this.trackReviewForm.value.RecordingId
        }
      return this.http.post<TrackReview>(this.baseURL + '/Create/',body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    updateTrackReview( ): Observable<TrackReview> {
      var body ={
          Id: this.trackReviewForm.value.Id,
          Ranking: this.trackReviewForm.value.Ranking,
          Comment: this.trackReviewForm.value.Comment,
          ReviewerId: this.trackReviewForm.value.ReviewerId,
          RecordingId:this.trackReviewForm.value.RecordingId
      }
      console.log(body.Id);
      return this.http.put<TrackReview>(this.baseURL + '/Update/?' + body.Id, body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
     
    deleteTrackReview(trackReviewId) {  
      // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return this.http.delete(this.baseURL + '/Delete?id=' + trackReviewId);  
    }
}