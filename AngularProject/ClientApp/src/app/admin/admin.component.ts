import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Roles } from '../tools/roles';
import { AdminService } from '../_services/admin-service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // conditionalOperator = Roles;
  // enumRoles=[];

  constructor() {
  //     this.enumRoles=Object.keys(this.conditionalOperator);
     }  
  //   user:any;
  // // submitted = false;   
  // // EventValue: any = "Save";  
  
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  
  ngOnInit(): void {
  }
  // onSubmit() {
  //   this.service.changeRole( ).subscribe(res => {
  //     this.router.navigateByUrl('admin/user-list');
  //     this.toastr.success('User`s role was changed!','Goodjob')
  //   });
  // }
}
