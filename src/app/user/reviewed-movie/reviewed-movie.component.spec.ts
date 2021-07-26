import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewedMovieComponent } from './reviewed-movie.component';

describe('ReviewedMovieComponent', () => {
  let component: ReviewedMovieComponent;
  let fixture: ComponentFixture<ReviewedMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewedMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
