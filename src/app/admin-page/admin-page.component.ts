import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  movies: Movies[]=[];
  constructor(private movieservice:MovieServiceService,
    private router:Router,
    private changeDetectorRef: ChangeDetectorRef){}


  ngOnInit(): void {
    
this.getMovies();
  }

  adminLogut(){
    this.router.navigate(['']);
  }

  deleteMovie(movieId: number) {
    this.movieservice.deleteMovies(movieId).subscribe(data => {
      alert("Deleted");
    });
  }

  
  getMovies(){
    this.movieservice.getALlMovies().subscribe(data=>{
      this.movies=data;
    });
  }

  updateMovie(movie: Movies) {
    this.router.navigate(['update/movie', movie.movieId]);
  }
  
}
