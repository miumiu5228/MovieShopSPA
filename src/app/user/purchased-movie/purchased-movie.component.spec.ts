import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedMovieComponent } from './purchased-movie.component';

describe('PurchasedMovieComponent', () => {
  let component: PurchasedMovieComponent;
  let fixture: ComponentFixture<PurchasedMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
