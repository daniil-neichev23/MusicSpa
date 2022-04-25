import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Roles } from 'src/app/tools/roles';
import { AdminService } from 'src/app/_services/admin-service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.css']
})
export class UserChangeComponent implements OnInit {

//   conditionalOperator = Roles;
//   enumRoles=[];

  constructor(public service: AdminService, private userservice: UserService,
    private router: Router, private toastr: ToastrService, private route:ActivatedRoute) {
    //   this.enumRoles=Object.keys(this.conditionalOperator);
     }  
    id: string;
    role: string;
    rolesArr: any[];
    user:any;
  // submitted = false;   
  // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.service.formModel.reset();
    this.id = this.route.snapshot.params['userId'];
    this.service.getRoles().subscribe((p:any)=>{
        this.rolesArr = p;
    });
    // console.log(this.id); 
    this.userservice.getUser(this.id).subscribe((data: any) => {
        this.user = data;
        console.log(this.user);
        this.role = this.user.role;
        });
  } 

  onSubmit() {
    this.service.changeRole(this.id).subscribe((res) => {
      this.router.navigateByUrl('admin/user-list');
      this.toastr.success('User`s role was changed!','Good job!')
    },
    (error)=>{
        console.log(error.error);
    });
  }
}
