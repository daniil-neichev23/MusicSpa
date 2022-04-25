import { Injectable } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { AlbumReview } from 'src/app/models/album-review';
import { GroupMember } from 'src/app/models/group-member';

@Injectable({
    providedIn: 'root'
  })
  export class GroupMemberService {
  
    constructor(private http: HttpClient, private fb:FormBuilder) { }
  public grmemb: GroupMember;
  dataSource: any;
    readonly baseURL = 'https://localhost:44391/api/GroupMember';
  
    httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json'  
      })  
    }  
  
  
    
  
    getGroupMembersWithEntities() :Observable<any[]>{
        return this.http.get<any[]>(this.baseURL + '/ReadList').pipe(catchError(this.errorHandler));
    }
  
    getAllGroupMembers(): Observable<GroupMember[]> {  
      return this.http.get<GroupMember[]>(this.baseURL + '/Read').pipe(catchError(this.errorHandler));  
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
  
    groupMemberForm = this.fb.group({  
      Id: [''],  
      Joined: [true],
      Left:[false],
      MusicianId:[''],
        ArtistId:['']
    });
  
  getGroupMemberById(id): Observable<any> {
      return this.http.get<any>(this.baseURL + '/GetById/?id=' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    createGroupMember(): Observable<GroupMember> {
        var body ={
            Joined: this.groupMemberForm.value.Joined,
            Left: this.groupMemberForm.value.Left,
            MusicianId: this.groupMemberForm.value.MusicianId,
            ArtistId:this.groupMemberForm.value.ArtistId
        }
      return this.http.post<GroupMember>(this.baseURL + '/Create/',body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    updateGroupMember( ): Observable<GroupMember> {
      var body ={
          Id: this.groupMemberForm.value.Id,
          Joined: this.groupMemberForm.value.Joined,
          Left: this.groupMemberForm.value.Left,
          MusicianId: this.groupMemberForm.value.MusicianId,
          ArtistId:this.groupMemberForm.value.ArtistId
      }
      console.log(body.Id);
      return this.http.put<GroupMember>(this.baseURL + '/Update/?' + body.Id, body)
        .pipe(
          catchError(this.errorHandler)
        );
    }
     
    deleteGroupMember(groupMemberId) {  
      // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return this.http.delete(this.baseURL + '/Delete?id=' + groupMemberId);  
    }
}