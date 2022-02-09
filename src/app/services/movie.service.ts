import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiObject } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private api = 'https://api.themoviedb.org/3/search/movie?api_key=545c6ef058e65396849dfbbf381cbca3&page=1&include_adult=false&query='
  constructor(private http: HttpClient) { }


  searchMovies(query: string) : Observable<MovieApiObject> {
    const url = `${this.api}` + query
    console.log(url);
    return this.http.get<MovieApiObject>(url)

  }


}
