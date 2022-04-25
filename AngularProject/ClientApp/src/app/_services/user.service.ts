import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';


import jwt_decode from 'jwt-decode';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder, private http:HttpClient) { }
  readonly BaseURI = 'https://localhost:44391/api';

  formModel = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    PhoneNumber: [''],
    Name: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['',Validators.required]
    }, {validator: this.comparePasswords})
  });

  formLoginModel = this.fb.group({
    Email: ['', Validators.required],
      Password: ['', Validators.required]
  });

  comparePasswords(fb:FormGroup){
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if(confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors){
      if(fb.get('Password').value!= confirmPswrdCtrl.value ){
        confirmPswrdCtrl.setErrors({ passwordMismatch: true});
      }
      else{
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }
  // createFormControls() {
  //   this.name = new FormControl('', Validators.required);
  //   this.confirmPassword = new FormControl('', Validators.required);
  //   this.email = new FormControl('', [
  //     Validators.required,
  //     Validators.pattern("[^ @]*@[^ @]*")
  //   ]);
  //   this.password = new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(6)
  //   ]);
  //   this.phoneNumber = new FormControl('');
  // }
  // myform: FormGroup;
  // email: FormControl;
  // name: FormControl;
  // password: FormControl;
  // confirmPassword: FormControl;  
  // phoneNumber: FormControl;

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  register(){
      var body = {
        Name:  this.formModel.value.Name,
        Email:  this.formModel.value.Email,
        Password:  this.formModel.value.Passwords.Password,
        // ConfirmPassword:  this.formModel.value.Passwords.ConfirmPassword,
        PhoneNumber:  this.formModel.value.PhoneNumber
      };
      return this.http.post(this.BaseURI+'/Account/Register', body);
  }

  login():Observable<any> {
    var body ={
      Email: this.formLoginModel.value.Email,
      Password: this.formLoginModel.value.Password
  };
    return this.http.post<any>(this.BaseURI + '/Account/Login', body);
  }

  getUser(id) : Observable<any>{
    return this.http.get<any>(this.BaseURI + '/Account/Read/?id='+ id);
  }
}
