import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  @Input() movie

  @Output() deleteMovie = new EventEmitter()
  ngOnInit() {
  }

  requestDelete(movie){
    this.deleteMovie.emit(movie)
  }

}
