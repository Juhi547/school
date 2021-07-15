import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailStudentComponent } from './viewdetail-student.component';

describe('ViewdetailStudentComponent', () => {
  let component: ViewdetailStudentComponent;
  let fixture: ComponentFixture<ViewdetailStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdetailStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdetailStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
