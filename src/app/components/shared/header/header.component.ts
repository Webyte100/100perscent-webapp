/**This File describes the header component
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean;
  isAdmin: boolean;
  user: UserModel = new UserModel();
  constructor(private service: LoginService, private router: Router) {
    this.service.loggedIn.subscribe(isLogged => {
      this.logged = isLogged;
    });
    this.service.getAuthenticatedUser().subscribe(user => {
      this.user = user;
    });
	this.service.isAdmin.subscribe(isAdmin => {
		this.isAdmin = isAdmin;
	})
  }

  ngOnInit(): void { }

  logout() {
    this.service.logoutUser();
    this.router.navigate(['/home']);
  }

}
