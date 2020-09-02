import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortnameComponent } from './sortname.component';

describe('SortnameComponent', () => {
  let component: SortnameComponent;
  let fixture: ComponentFixture<SortnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
