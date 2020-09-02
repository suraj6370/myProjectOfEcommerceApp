import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepageComponent } from './changepage.component';

describe('ChangepageComponent', () => {
  let component: ChangepageComponent;
  let fixture: ComponentFixture<ChangepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
