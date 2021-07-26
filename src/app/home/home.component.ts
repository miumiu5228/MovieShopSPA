import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { MovieCard } from '../shared/models/moviecard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies!: MovieCard[];

  constructor(private moviceService: MovieService) {}

  ngOnInit(): void {
    this.moviceService.getTopRevenueMovies().subscribe((m) => {
      this.movies = m;
      //console.log(this.movies);

      //console.table will show the data with the table style in console
      console.table(this.movies);
    });
  }
}
