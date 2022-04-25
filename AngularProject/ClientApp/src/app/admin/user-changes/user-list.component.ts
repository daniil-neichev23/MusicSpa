import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Roles } from 'src/app/tools/roles';
import { AdminService } from 'src/app/_services/admin-service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // conditionalOperator = Roles;
  // enumRoles=[];
  isLoading = true;

  constructor(public service: AdminService, private userservice: UserService,
    private router: Router, private toastr: ToastrService, private route:ActivatedRoute) {
  //     this.enumRoles=Object.keys(this.conditionalOperator);
     }  
    id: string;
    Data: any[];
  //   user:any;
  // // submitted = false;   
  // // EventValue: any = "Save";  
  
  ngOnInit(): void {   
    this.id = this.route.snapshot.params['userId'];
    this.getAllUsers();
  //   // console.log(this.id); 
  //   this.userservice.getUser(this.id).subscribe((data: any) => {
  //       this.user = data;
  //       this.service.formModel.patchValue({
  //       Role: this.user.result.role,
  //       PhoneNumber: this.user.result.phoneNumber,
  //       Email: this.user.result.email,
  //       Name: this.user.result.name,
  //       Password: this.user.result.password
  //         });
  //       });
  } 
  getAllUsers(){
    this.service.getAllUsers().subscribe((data:any[])=>{
        this.isLoading = false;
      this.Data = data;
    })
  }
  // onSubmit() {
  //   this.service.changeRole( ).subscribe(res => {
  //     this.router.navigateByUrl('admin/user-list');
  //     this.toastr.success('User`s role was changed!','Goodjob')
  //   });
  // }
}
