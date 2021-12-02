/**This File describes spinner components details
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/shared/spinner/spinner.service';

@Component({
	selector: 'app-spinner',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

	isSpinnerActive: boolean = false;

	constructor(private spinnerService: SpinnerService) {
		this.spinnerService.isSpinnerActive.subscribe((value: boolean) => {
			this.isSpinnerActive = value
		})
	}
	ngOnInit(): void {
	}

}
