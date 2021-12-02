/**This File describes function of root App component
* @author Varsha Vaitla
* @version 12.0.2
**/

import { Component } from '@angular/core';
import { SpinnerService } from './services/shared/spinner/spinner.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'sterling-ticks';
	isSpinnerActive: boolean = false;

	constructor(private spinnerService: SpinnerService) {
		this.spinnerService.isSpinnerActive.subscribe((value: boolean) => {
			this.isSpinnerActive = value
		})
	}
}
