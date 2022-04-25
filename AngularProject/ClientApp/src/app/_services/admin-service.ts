import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private fb:FormBuilder, private http:HttpClient) { }
  readonly BaseURI = 'https://localhost:44391/api';

  formModel = this.fb.group({
    Role: ['']
  });
  element:string;

  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }  

  changeRole(id):Observable<any> {
    var body =
    [{
    value: this.formModel.value.Role,
    path:"/Role",
    op: "replace",
  }];
  console.log(body);    
    return this.http.patch(this.BaseURI + '/Admin/UpdateUser/?id=' + id, body, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
}

  getAllUsers():Observable<any[]>{
      return this.http.get<any[]>(this.BaseURI + '/Admin/UserList');
  }

  getRoles(): Observable<any[]>{
      return this.http.get<any[]>(this.BaseURI + "/Admin/RoleList");
  }
}
