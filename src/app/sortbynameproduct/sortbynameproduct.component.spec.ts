import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbynameproductComponent } from './sortbynameproduct.component';

describe('SortbynameproductComponent', () => {
  let component: SortbynameproductComponent;
  let fixture: ComponentFixture<SortbynameproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortbynameproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbynameproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
