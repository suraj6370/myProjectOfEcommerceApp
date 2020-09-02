import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortpriceComponent } from './sortprice.component';

describe('SortpriceComponent', () => {
  let component: SortpriceComponent;
  let fixture: ComponentFixture<SortpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
