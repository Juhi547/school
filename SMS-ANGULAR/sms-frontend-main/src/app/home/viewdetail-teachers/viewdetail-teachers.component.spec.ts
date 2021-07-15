import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailTeachersComponent } from './viewdetail-teachers.component';

describe('ViewdetailTeachersComponent', () => {
  let component: ViewdetailTeachersComponent;
  let fixture: ComponentFixture<ViewdetailTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdetailTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdetailTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
