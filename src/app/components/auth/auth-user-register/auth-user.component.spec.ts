import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserComponent } from './auth-user.component';

describe('AuthUserComponent', () => {
  let component: AuthUserComponent;
  let fixture: ComponentFixture<AuthUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
