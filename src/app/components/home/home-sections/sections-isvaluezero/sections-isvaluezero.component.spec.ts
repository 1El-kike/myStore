/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectionsIsvaluezeroComponent } from './sections-isvaluezero.component';

describe('SectionsIsvaluezeroComponent', () => {
  let component: SectionsIsvaluezeroComponent;
  let fixture: ComponentFixture<SectionsIsvaluezeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsIsvaluezeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsIsvaluezeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
