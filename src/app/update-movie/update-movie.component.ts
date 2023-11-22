import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent  implements OnInit{



  movie: Movies = {
    movieId: 0,
    movieName: '',
    director: '',
    posterLink: ''
  };  id:number=0;
  constructor(private router:Router,
       private route:ActivatedRoute,
       private movieservice : MovieServiceService){}

       ngOnInit(): void {
        const movieId = this.route.snapshot.paramMap.get('movieId');
        this.id = movieId !== null ? Number(movieId) : 0;
      
        if (movieId !== null) {
          this.movieservice.getMovieById(this.id).subscribe(
            (data: Movies) => {
              this.movie = data;
              console.log(this.movie);
            },
            (error) => {
              console.error("Error fetching movie details:", error);
            }
          );
        }
      }
      
  updateMovie( ){

    this.movieservice.updateMovie(this.id,this.movie).subscribe(data=>{
      alert("Movie updated");
      this.router.navigate(['/admin/page']);
    },error=>{
      alert("error");
    })

  }



  adminLogut(){
    this.router.navigate(['']);
  }
}
