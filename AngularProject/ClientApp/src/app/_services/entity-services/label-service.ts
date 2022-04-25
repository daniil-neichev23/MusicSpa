import { Injectable } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { Label } from 'src/app/models/label';

@Injectable({
    providedIn: 'root'
  })
  export class LabelService {
  
    constructor(private http: HttpClient, private fb:FormBuilder) { }
  public lab: Label;
  dataSource: any;
    readonly baseURL = 'https://localhost:44391/api/Label';
    readonly baseAlbumURL = 'https://localhost:44391/api/Album';
    readonly baseArtistURL = 'https://localhost:44391/api/Artist';
  
    httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json'  
      })  
    }  
  
  
    
  
    getLabelsWithEntities() :Observable<any[]>{
        return this.http.get<any[]>(this.baseURL + '/ReadList').pipe(catchError(this.errorHandler));
    }
  
    getAllLabels(): Observable<Label[]> {  
      return this.http.get<Label[]>(this.baseURL + '/Read').pipe(catchError(this.errorHandler));  
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
  
    labelForm = this.fb.group({  
      Id: [''],  
      Name: [""],
      
    });
  
  getLabelById(id): Observable<any> {
      return this.http.get<any>(this.baseURL + '/GetById/?id=' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    createLabel(): Observable<Label> {
        var body ={
            Name: this.labelForm.value.Name
        }
      return this.http.post<Label>(this.baseURL + '/Create/',body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    updateLabel( ): Observable<Label> {
      var body ={
          Id: this.labelForm.value.Id,
          Name: this.labelForm.value.Name
      }
      console.log(body.Id);
      return this.http.put<Label>(this.baseURL + '/Update/?' + body.Id, body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
     
    deleteLabel(labelId) {  
      // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return this.http.delete(this.baseURL + '/Delete?id=' + labelId);  
    }
}