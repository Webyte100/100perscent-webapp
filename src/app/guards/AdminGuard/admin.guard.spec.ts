/**This File describes the admin validation methods
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { TestBed } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
	let guard: AdminGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(AdminGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
