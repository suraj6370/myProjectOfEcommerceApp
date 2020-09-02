import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorydisplaypageComponent } from './categorydisplaypage.component';

describe('CategorydisplaypageComponent', () => {
  let component: CategorydisplaypageComponent;
  let fixture: ComponentFixture<CategorydisplaypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorydisplaypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorydisplaypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
