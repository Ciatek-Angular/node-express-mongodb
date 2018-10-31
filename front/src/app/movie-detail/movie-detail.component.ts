import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/movies/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private moviesService: MoviesService ) { }

  index
  id
  movie: {}

  ngOnInit() {
    this.index = this.route.params
    this.id = this.index.value.id
    this.movie = this.moviesService.getMovie(this.id).subscribe( (movie) => this.movie = movie)
    console.log(this.movie)
  }

  updateMovie(movie){
    this.moviesService.updateMovie(movie)
  }

}