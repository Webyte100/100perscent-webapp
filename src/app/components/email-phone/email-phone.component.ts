/**This class describes  Values of email-phone Component
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from 'src/app/common/global-constants';
import { RegisterService } from 'src/app/services/register.service';

@Component({
	selector: 'app-email-phone',
	templateUrl: './email-phone.component.html',
	styleUrls: ['./email-phone.component.css']
})
export class EmailPhoneComponent implements OnInit {
	public email: String | undefined
	public phone: String | undefined
	public username: String

	constructor(private router: Router, private http: HttpClient, private regService: RegisterService) {
		({userName: this.username, email: this.email, phoneNo: this.phone} = regService.registeredUser)
	}

	ngOnInit(): void {
	}

	onSend(choice: Number) {
		if(choice == 1) {
			this.http.post(URLS.OTP_GENERATE, {username: this.username, email: this.email})
				.toPromise()
				.then(() => this.navigate())
		}
		else if (choice == 2){
			this.http.post(URLS.OTP_GENERATE, {username: this.username, phone: this.phone})
			.toPromise()
			.then(() => this.navigate())
		}
		else {
			// Do nothing
			return
		}
	}

	navigate(): void {
		this.router.navigate(['/otp']);
	}
}
