import { Component, OnInit, DoCheck } from '@angular/core';

import { MoviesService } from './movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck {
  movies

  constructor(public movieService: MoviesService) { }

  ngOnInit() {
    // this.movies = this.movieService.movies
    
    // Getting data from service
    this.movieService.movies.subscribe( (data) => this.movies = data);
  }

  ngDoCheck(){
  }


  addMovie(title,genre,length,photo) {
    console.log(title.value,genre.value,length.value,photo.files[0].name)
    this.movieService.addMovie(title,genre,length,photo)
  }

  onDeleteMovie(movie){
    console.log(movie)
    this.movieService.deleteMovie(movie)
  }

}
