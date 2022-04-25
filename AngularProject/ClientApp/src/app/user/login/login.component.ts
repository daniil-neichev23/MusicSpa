import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[]
})
export class LoginComponent implements OnInit {
  formModel = {
    Email: '',
    Password: ''
  }

  constructor(public service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem("token") != null)
    this.router.navigateByUrl('/home');
    this.service.formLoginModel.reset();
  }

  onSubmit() {
    this.service.login().subscribe(
      (res:any) => {
        this.service.formLoginModel.reset();
        sessionStorage.setItem("token", res.tokenDescriptor);
        // this.service.getUser(this.service.formLoginModel.value.Email).subscribe(
        //   (p=>{
        //     let user = p;
        //     sessionStorage.setItem("currentUser", user.role.toString());
        //   })
        // )
        this.router.navigateByUrl('/home');
        let tokenInfo = this.service.getDecodedAccessToken(sessionStorage.getItem("token"));
        this.toastr.success('Hello, '+tokenInfo['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']+'! You are logged in :)');
      },
      err => {
        this.service.formLoginModel.reset();
        if (err.status == 400){
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        }
        else{
          console.log(err);
        }
      }
    );
  }

  // onSubmit(form: NgForm) {
  //   this.service.login(form.value).subscribe(
  //     (res:any) => {
  //       sessionStorage.setItem("token", res.tokenDescriptor);
  //       this.service.getUser([this.formModel.Email]).subscribe(
  //         (p:any)=>{
  //           sessionStorage.setItem("currentUser", p.result);
  //         }
  //       )
  //       this.router.navigateByUrl('/home');
  //       let tokenInfo = this.service.getDecodedAccessToken(sessionStorage.getItem("token"));
  //       this.toastr.success('Hello, '+tokenInfo['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']+'! You are logged in :)');
  //     },
  //     err => {
  //       if (err.status == 400)
  //         this.toastr.error('Incorrect username or password.', 'Authentication failed.');
  //       else
  //         console.log(err);
  //     }
  //   );
  // }
}
