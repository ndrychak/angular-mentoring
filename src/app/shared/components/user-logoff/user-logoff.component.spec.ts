import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogoffComponent } from './user-logoff.component';

describe('UserLogoffComponent', () => {
  let component: UserLogoffComponent;
  let fixture: ComponentFixture<UserLogoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLogoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
