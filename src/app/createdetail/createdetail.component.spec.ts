import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedetailComponent } from './createdetail.component';

describe('CreatedetailComponent', () => {
  let component: CreatedetailComponent;
  let fixture: ComponentFixture<CreatedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
