import { Component, Input, OnInit } from '@angular/core';
import { movie } from 'src/app/models/movie';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
@Input() movie : movie | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
