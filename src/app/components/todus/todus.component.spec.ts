import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodusComponent } from './todus.component';

describe('TodusComponent', () => {
  let component: TodusComponent;
  let fixture: ComponentFixture<TodusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
