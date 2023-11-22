import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketAcess } from './ticket-acess';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  private baseUrl = 'http://localhost:8080/movietickets';
 
  constructor(private http: HttpClient) {}

  getTickets(uId: number): Observable<TicketAcess[]> {
    return this.http.get<TicketAcess[]>(`${this.baseUrl}/${uId}`);
  }
  buyTickets(uId: number, mId: number, showTime: string, theatre: string , date:string): Observable<any> {
    const requestBody={
      userId:uId,
      movieId:mId,
      theatre:theatre,
      date:date,
      showTime:showTime


    }

  return this.http.post(`${this.baseUrl}/buy`, requestBody);

  }
  deleteTickets(tId:number){
    return this.http.delete(`${this.baseUrl}/delete/${tId}`);
  }
}
