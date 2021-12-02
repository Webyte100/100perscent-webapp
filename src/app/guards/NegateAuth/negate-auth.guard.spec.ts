/**This File describes the authentication failed 
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { TestBed } from '@angular/core/testing';

import { NegateAuthGuard } from './negate-auth.guard';

describe('NegateAuthGuard', () => {
  let guard: NegateAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NegateAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
