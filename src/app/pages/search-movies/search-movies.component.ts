import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  query: string = '';
  movies: movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  searchMovies(){
    if(this.query.length > 0){
      this.movieService.searchMovies(this.query).subscribe((movies) => this.movies = movies.results.map((m) => new movie(m.id, m.title, m.popularity, m.poster_path, m.overview)));
    }
  }

}
