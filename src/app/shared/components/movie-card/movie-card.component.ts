import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MovieCard } from '../../models/moviecard';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input ()
  moviecard !: MovieCard;

  constructor() { }

  ngOnInit(): void {
  }

}
