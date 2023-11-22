import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movies } from '../movies';
import { TicketServiceService } from '../ticket-service.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  uId: number | undefined;

movieName1:string="";
movie: Movies = {
  movieId: 0,
  movieName: '',
  director: '',
  posterLink: ''
};

showTime : string = "";
  theatre : string ="";
 date: string = "";
  movies: Movies[] = [];

  constructor(private userService:UserServiceService,
    private router:Router,
    private route:ActivatedRoute,
    private movieservice: MovieServiceService,
    private userservice:UserServiceService,
    private ticketservice :TicketServiceService){
      this.uId = this.userservice.getUserLogin()?.id;

    }


  userLogOut(){

    this.userService.logOut();
    this.router.navigate(['/']);


    
  }
  getMovie() {
    this.movieservice.getMovieByName(this.movieName1).subscribe(data=>{
      this.movie=data;
    })
  }
  
  ngOnInit(): void {
    
    const name=this.route.snapshot.paramMap.get('searchMovie');
    this.movieName1 = name != null ? String(name):"";


    this.getMovie();
   
    

  }

  buyTicket(movieId: number) {
    if (this.uId !== undefined) {
    
  
      this.ticketservice.buyTickets(this.uId, movieId, this.showTime, this.theatre ,this.date).subscribe({
        next: (data: any) => {
          console.log('Success:', data);
         alert("Congratulations");
         this.showTime="";
         this.theatre="";
         this.date="";
       
        },
        error: (error: any) => {
          console.error('Error:', error);
          alert("retry");
        }
      });
    } else {
      console.log('User ID is undefined');
     
    }
  }
  
 
  

}
