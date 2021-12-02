import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SpinnerService {

	public isSpinnerActive: BehaviorSubject<boolean>
	constructor() {
		this.isSpinnerActive = new BehaviorSubject<boolean>(false)
	}
	
	showSpinner() {
		this.isSpinnerActive.next(true);
	}

	hideSpinner() {
		this.isSpinnerActive.next(false);
	}
}
