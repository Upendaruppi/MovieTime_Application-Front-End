import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Movies } from '../movies';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  movie: Movies = {
    movieId: 0,
    movieName: '',
    director: '',
    posterLink: ''
  };
  


  constructor(private movieservice:MovieServiceService,
    private router:Router){}


  addMovie() {
    this.movieservice.addMovies(this.movie).subscribe({
      next: (data) => {
        alert("Movie Added");
        
  this.movie.movieName="";
  this.movie.director="";
  this.movie.posterLink="";
        
      },
      error: (error) => {
        alert("Error");
      }
    });
  }
  adminLogut(){
    this.router.navigate(['']);
  }

 
}
