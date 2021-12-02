/**This File contains the method to serach by modelno 
 * and stored the user entered data
* @author S.Swetha, Shruti Sunil Mayekar 
* @version 12.0.2
**/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BymodelnoComponent } from './bymodelno.component';

describe('BymodelnoComponent', () => {
  let component: BymodelnoComponent;
  let fixture: ComponentFixture<BymodelnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BymodelnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BymodelnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
