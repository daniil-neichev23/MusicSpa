import { Injectable } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { AlbumReview } from 'src/app/models/album-review';
import { Reviewer } from 'src/app/models/reviewer';

@Injectable({
    providedIn: 'root'
  })
  export class ReviewerService {
  
    constructor(private http: HttpClient, private fb:FormBuilder) { }
  public rev: Reviewer;
  dataSource: any;
    readonly baseURL = 'https://localhost:44391/api/Reviewer';
  
    httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json'  
      })  
    }  
  
  
    
  
    getReviewersWithEntities() :Observable<any[]>{
        return this.http.get<any[]>(this.baseURL + '/ReadList').pipe(catchError(this.errorHandler));
    }
  
    getAllReviewers(): Observable<Reviewer[]> {  
      return this.http.get<Reviewer[]>(this.baseURL + '/Read').pipe(catchError(this.errorHandler));  
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
  
    reviewerForm = this.fb.group({  
      Id: [''],  
      Joined: [true],
    });
  
  getReviewerById(id): Observable<any> {
      return this.http.get<any>(this.baseURL + '/GetById/?id=' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    createReviewer(): Observable<Reviewer> {
        var body ={
            Joined: this.reviewerForm.value.Joined,
         }
      return this.http.post<Reviewer>(this.baseURL + '/Create/',body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    updateReviewer( ): Observable<Reviewer> {
      var body ={
          Id: this.reviewerForm.value.Id,
          Joined: this.reviewerForm.value.Joined,
      }
      console.log(body.Id);
      return this.http.put<Reviewer>(this.baseURL + '/Update/?' + body.Id, body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
     
    deleteReviewer(reviewerId) {  
      // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return this.http.delete(this.baseURL + '/Delete?id=' + reviewerId);  
    }
}