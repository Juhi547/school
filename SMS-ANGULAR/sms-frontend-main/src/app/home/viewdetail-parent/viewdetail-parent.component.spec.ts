import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailParentComponent } from './viewdetail-parent.component';

describe('ViewdetailParentComponent', () => {
  let component: ViewdetailParentComponent;
  let fixture: ComponentFixture<ViewdetailParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdetailParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdetailParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
