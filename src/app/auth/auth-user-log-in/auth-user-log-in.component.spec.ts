import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserLogInComponent } from './auth-user-log-in.component';

describe('AuthUserLogInComponent', () => {
  let component: AuthUserLogInComponent;
  let fixture: ComponentFixture<AuthUserLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthUserLogInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthUserLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
