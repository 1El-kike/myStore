import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritProductsComponent } from './favorit-products.component';

describe('FavoritProductsComponent', () => {
  let component: FavoritProductsComponent;
  let fixture: ComponentFixture<FavoritProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
