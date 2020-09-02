import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOnMyShopComponent } from './sell-on-my-shop.component';

describe('SellOnMyShopComponent', () => {
  let component: SellOnMyShopComponent;
  let fixture: ComponentFixture<SellOnMyShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellOnMyShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOnMyShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
