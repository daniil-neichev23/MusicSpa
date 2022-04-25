import { Injectable } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { AlbumReview } from 'src/app/models/album-review';

@Injectable({
    providedIn: 'root'
  })
  export class AlbumReviewService {
  
    constructor(private http: HttpClient, private fb:FormBuilder) { }
  public albrev: AlbumReview;
  dataSource: any;
    readonly baseURL = 'https://localhost:44391/api/AlbumReview';
  
    httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json'  
      })  
    }  
  
  
    
  
    getAlbumReviewsWithEntities() :Observable<any[]>{
        return this.http.get<any[]>(this.baseURL + '/ReadList').pipe(catchError(this.errorHandler));
    }
  
    getAllAlbumReviews(): Observable<AlbumReview[]> {  
      return this.http.get<AlbumReview[]>(this.baseURL + '/Read').pipe(catchError(this.errorHandler));  
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
  
    albumReviewForm = this.fb.group({  
      Id: [''],  
      Ranking: [[1-5]],
      Comment:[''],
      ReviewerId:[''],
        AlbumId:['']
    });
  
  getAlbumReviewById(id): Observable<any> {
      return this.http.get<any>(this.baseURL + '/GetById/?id=' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    createAlbumReview(): Observable<AlbumReview> {
        var body ={
            Ranking: this.albumReviewForm.value.Ranking,
            Comment: this.albumReviewForm.value.Comment,
            ReviewerId: this.albumReviewForm.value.ReviewerId,
            AlbumId:this.albumReviewForm.value.AlbumId
        }
      return this.http.post<AlbumReview>(this.baseURL + '/Create/',body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    updateAlbumReview( ): Observable<AlbumReview> {
      var body ={
          Id: this.albumReviewForm.value.Id,
          Ranking: this.albumReviewForm.value.Ranking,
          Comment: this.albumReviewForm.value.Comment,
          ReviewerId: this.albumReviewForm.value.ReviewerId,
          AlbumId:this.albumReviewForm.value.AlbumId
      }
      console.log(body.Id);
      return this.http.put<AlbumReview>(this.baseURL + '/Update/?' + body.Id, body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
     
    deleteAlbumReview(albumReviewId) {  
      // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return this.http.delete(this.baseURL + '/Delete?id=' + albumReviewId);  
    }
}