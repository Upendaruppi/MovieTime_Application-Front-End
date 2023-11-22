import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Movies } from '../movies';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { TicketServiceService } from '../ticket-service.service';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  uId: number | undefined;
  searchMovie:string="";

  constructor(
    private movieservice: MovieServiceService,
    private router: Router,
    private userservice: UserServiceService,
    private ticketservice: TicketServiceService,
  ) {
    this.uId = this.userservice.getUserLogin()?.id;
  }

  showTime : string = "";
  theatre : string ="";
 date: string = "";
  movies: Movies[] = [];

  ngOnInit(): void {
    this.movieservice.getALlMovies().subscribe((data) => {
      this.movies = data;
    });
  }

  userpage() {
    this.router.navigate(["user/page"]);
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
  
  userLogOut(){

  this.userservice.logOut();
  this.router.navigate(['/']);
}
  

search(){

  this.router.navigate(['/search/movie', this.searchMovie]);
}



}
