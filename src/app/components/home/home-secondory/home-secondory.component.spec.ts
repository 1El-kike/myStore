import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecondoryComponent } from './home-secondory.component';

describe('HomeSecondoryComponent', () => {
  let component: HomeSecondoryComponent;
  let fixture: ComponentFixture<HomeSecondoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSecondoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSecondoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
