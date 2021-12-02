/**This class describes  functions of otp component with validate and submit 
* @author S.Swetha, Shruti Sunil Mayekar 
* @version 12.0.2
**/

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { URLS } from 'src/app/common/global-constants';
import { RegisterService } from 'src/app/services/register.service';

@Component({
	selector: 'app-otp',
	templateUrl: './otp.component.html',
	styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
	title = 'otp';
	username: string;
	form: FormGroup;
	formInput = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
	@ViewChildren('formRow') rows: any;

	ngOnInit(): void {
	}

	constructor(private router: Router, private http: HttpClient, private regService: RegisterService) {
		({ userName: this.username } = this.regService.registeredUser)
		this.form = this.toFormGroup(this.formInput);
	}

	toFormGroup(elements: any[]) {
		const group: any = {};

		elements.forEach((key: string | number) => {
			group[key] = new FormControl('', Validators.required);
		});
		return new FormGroup(group);
	}

	keyUpEvent(event: { keyCode: number; which: number; }, index: number) {
		let pos = index;
		if (event.keyCode == 8 && event.which == 8) {
			pos = index - 1;
		}
		else {
			pos = index + 1;
		}
		if (pos > -1 && pos < this.formInput.length) {
			this.rows._results[pos].nativeElement.focus();
		}
	}

	onSubmit() {
		const value: string = Object.values(this.form.value).join('')
		this.http.post(URLS.OTP_VALIDATE,
				{username: this.username, value},
				{observe: 'body'})
			.subscribe((data) => {
				this.router.navigate(['/products'])
			})
	}

}
