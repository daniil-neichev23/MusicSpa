import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles:[]
})
export class HomeComponent {
  constructor(private router: Router, private service: UserService) { }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onLogout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
  
}
