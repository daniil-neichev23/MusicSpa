import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../_services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(public service: UserService, private router: Router, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit(){
    this.service.register().pipe(first()).subscribe(
        {
          next: () =>{
          this.service.formModel.reset();
          this.router.navigateByUrl('/user/login');
          this.toastr.success('New user created!','Registration successful')
          },
          error: error =>{
            this.toastr.error(error.description,'Registration failed');
          }
      }
    );
  }

  // onSubmit(){
  //   this.service.register(this.service.formModel.value).subscribe(
  //     (res:any)=>{
  //       if(res.succeeded)
  //       {
  //         this.service.formModel.reset();
  //         this.toastr.success('New user created!','Registration successful')
  //       } else{
  //         res.errors.forEach((element:any) => {
  //           switch (element.code) {
  //             case 'DuplicateUserName':
  //               this.toastr.error('Username is already taken','Registration failed');
  //               break;
  //             default:
  //               this.toastr.error(element.description,'Registration failed');
  //               break;
  //             }
  //           });
  //       }
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
}
