import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAcess } from './user-acess';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {

 private baseURL = "http://localhost:8080/user/login";

  constructor(private httpClient: HttpClient) {}

  login(useracess: UserAcess): Observable<object> {
    console.log(useracess);
    return this.httpClient.post(`${this.baseURL}`, useracess);
  }
}
