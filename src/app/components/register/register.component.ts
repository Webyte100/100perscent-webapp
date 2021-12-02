/**This class describes functions of register component with register and on success
* @author Varsha Vaitla, Shruti Sunil Mayekar 
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { UserModel as User } from 'src/app/components/models/user.model';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  flag: boolean = false;
  alert: boolean = false;
  success: boolean = false;
  constructor(private router: Router, private service: RegisterService) { }

  ngOnInit(): void {
  }
  register() {
    if (this.user.password == this.user.confirmpwd) {
      this.flag = true;
      let res = this.service.register(this.user).subscribe({
        next: data => {
          this.user = data as User;
          this.onSuccess();
        },
        error: error => {
          let errorMessage = error.message;
          this.alert = true;
        }
      });
    }
    else {
      this.alert = true;
    }
  }

  onSuccess(){
    this.success = true;
    setTimeout(()=>{
		this.router.navigate(['/email-phone'])
	}, 700);
  }
}
