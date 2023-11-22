import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketServiceService } from '../ticket-service.service';
import { UserAcess } from '../user-acess';
import { TicketAcess } from '../ticket-acess';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  ticketAccess!: Observable<TicketAcess[]>;
  userLogin: UserAcess | null = null;
  uId: number | undefined;
  tickets: TicketAcess[] = [];

  constructor(private userService: UserServiceService, private ticketservice: TicketServiceService,
  private router :Router,
  
  
  ) {
    this.uId = this.userService.getUserLogin()?.id;
  }

  ngOnInit(): void {
    
    this.getTickets();
  }

  getTickets(){
    if (this.uId !== undefined) {
      this.ticketAccess = this.ticketservice.getTickets(this.uId);

      this.ticketAccess.subscribe(data=>{

        this.tickets=data;

      }
      );
    } else {
      console.log('uId is undefined');
    }
  }
 

  deleteTicket(ticketId:number){

    this.ticketservice.deleteTickets(ticketId).subscribe(data=>{
      alert("cancelled"); this.getTickets();
    })
  }
  userLogOut(){

    this.userService.logOut();
    this.router.navigate(['/']);
  }
}
