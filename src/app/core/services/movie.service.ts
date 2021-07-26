import { Injectable } from '@angular/core';
import { MovieCard } from 'src/app/shared/models/moviecard';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopRevenueMovies() : Observable<MovieCard[]> {
    return this.http.get(`${environment.apiUrl}` + 'movies/toprevenue')
    .pipe( map(resp => resp as MovieCard[]) );
  }

  getMovieDetails(id: number) : Observable<Movie>{
    return this.http.get(`${environment.apiUrl}` + 'movies/' + id)
    .pipe( map(resp => resp as Movie));
  }

  getMovieByGenre(genreId: number) : Observable<Movie[]>{
    return this.http.get(`${environment.apiUrl}` + 'movies/genre/' + genreId)
    .pipe(map(resp => resp as Movie[]));
  }
}