/**This File add the more quantity of products
* @author Varsh Vaitla, Surya Alapati
* @version 12.0.2
**/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartQuantityComponent } from './cart-quantity.component';

describe('CartQuantityComponent', () => {
  let component: CartQuantityComponent;
  let fixture: ComponentFixture<CartQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
