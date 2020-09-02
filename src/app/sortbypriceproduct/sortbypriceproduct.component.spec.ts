import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbypriceproductComponent } from './sortbypriceproduct.component';

describe('SortbypriceproductComponent', () => {
  let component: SortbypriceproductComponent;
  let fixture: ComponentFixture<SortbypriceproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortbypriceproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbypriceproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
