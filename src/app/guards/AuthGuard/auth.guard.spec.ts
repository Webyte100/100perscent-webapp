/**This File describes the authentication methods
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuardGuard', () => {
	let guard: AuthGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(AuthGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
