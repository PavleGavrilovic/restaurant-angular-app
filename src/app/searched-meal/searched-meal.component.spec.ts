import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedMealComponent } from './searched-meal.component';

describe('SearchedMealComponent', () => {
  let component: SearchedMealComponent;
  let fixture: ComponentFixture<SearchedMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
