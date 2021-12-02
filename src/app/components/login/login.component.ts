/**This class describes  functions of login Component with authenricate and success
* @author Varsha Vaitla, Shruti Sunil Mayekar 
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CredentialModel as User} from '../models/credential.model';
import { delay } from "rxjs/operators";
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cred: User = new User();
  alert: boolean = false;
  success: boolean = false;
  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {

  }
  authenticate() {
    console.log(this.cred);
    this.service.authenticate(this.cred).subscribe({
      next: data => {
        this.success = true;
        this.onSuccess(data);
      },
      error: error => {
        let errorMessage = error.message;
        this.alert = true;
      }
    });
  }

  onSuccess(user: UserModel) {
    
    this.service.saveAuthenticatedUser(user);
    setTimeout(() => { this.router.navigate(['home']) }, 700);

  }
}