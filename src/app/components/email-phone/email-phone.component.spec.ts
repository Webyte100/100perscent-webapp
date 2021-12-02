/**This File describes the method to take
* email and phone number from user and store 
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPhoneComponent } from './email-phone.component';

describe('EmailPhoneComponent', () => {
  let component: EmailPhoneComponent;
  let fixture: ComponentFixture<EmailPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
