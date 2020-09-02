import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbysubgroupComponent } from './productbysubgroup.component';

describe('ProductbysubgroupComponent', () => {
  let component: ProductbysubgroupComponent;
  let fixture: ComponentFixture<ProductbysubgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbysubgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbysubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
