import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  movies: movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}
