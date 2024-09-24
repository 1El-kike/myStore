import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchElementComponent } from './search-element.component';

describe('SearchElementComponent', () => {
  let component: SearchElementComponent;
  let fixture: ComponentFixture<SearchElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
