/**This File describes the validity of each product
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { formatDate } from '@angular/common';
import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidateExpiry]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidateExpiryDirective, multi: true }]
})
export class ValidateExpiryDirective {

	currentYear: number
	currentMonth: number
	
	constructor() {
		const currentDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
		this.currentYear = parseInt(currentDate.substr(0, 4));
		this.currentMonth = parseInt(currentDate.substr(5, 2));
	}
	exipryValidator(control: AbstractControl): ValidationErrors | null {
		const month = control.get('expmonth');
		const year = control.get('expyear');
		return month && year && this.checkExpiryDate(month.value, year.value) ? null : {'expiryDate': true};
	};
	checkExpiryDate(month: number, year: number){
		if(!(year && month) || isNaN(year) || isNaN(month)){
			return false
		}else{
			return this.currentYear < year ? true : (this.currentMonth <= month) ? true : false;
		}
	}
	validate(control: AbstractControl): ValidationErrors | null {
		return this.exipryValidator(control);
	}


}
