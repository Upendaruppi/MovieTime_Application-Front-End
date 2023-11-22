import { Movies } from "./movies";
import { UserAcess } from "./user-acess";

export class TicketAcess {

    ticketId !: number;
    showTime !: string;
    date    !: string;
    theatre !: string;
    movie !: Movies;
    user !: UserAcess;

    
}
