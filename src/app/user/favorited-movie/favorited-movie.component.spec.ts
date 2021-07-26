import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritedMovieComponent } from './favorited-movie.component';

describe('FavoritedMovieComponent', () => {
  let component: FavoritedMovieComponent;
  let fixture: ComponentFixture<FavoritedMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritedMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
