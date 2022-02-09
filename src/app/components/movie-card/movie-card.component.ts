import { Component, Input, OnInit } from '@angular/core';
import { movie } from 'src/app/models/movie';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
@Input() movie : movie = {
  title: '',
  score: 0,
  imgUrl: '',
  description: ''
}
briefOverview: string = ''
showOverview: boolean = true
  constructor() { }

  ngOnInit(): void {
    this.briefOverview = `${this.movie.description.slice(0, 80)}...`
  }

  toggleExpand(){
  this.showOverview = !this.showOverview
  }

}
