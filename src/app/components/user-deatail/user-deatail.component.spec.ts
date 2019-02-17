import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeatailComponent } from './user-deatail.component';

describe('UserDeatailComponent', () => {
  let component: UserDeatailComponent;
  let fixture: ComponentFixture<UserDeatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
