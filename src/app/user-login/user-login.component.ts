import { Component } from '@angular/core';
import { UserAcess } from '../user-acess';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  userLogin: UserAcess = new UserAcess();

  private baseURL = "http://localhost:8080/user/login";

  constructor(private userservice: UserServiceService,
    private router: Router,
    private httpClient: HttpClient,
  ) {}

  onSubmit() {
    console.log(this.userLogin);
    this.httpClient.post<any>(`${this.baseURL}`, this.userLogin).subscribe({
      next: (data: any) => {
        const userAcess: UserAcess = {
          id: data.userId,
          name: data.name,
          email: data.email,
          password: data.password
        };
        this.userservice.setUserLogin(userAcess); 

        alert(`Login successful\nMovieTime.`);
        this.goToUserPage();
      },
      error: (error: HttpErrorResponse) => {
        alert("Login failed. " + error.error);
      }
    });
  }

  goToUserPage() {
    this.router.navigate(["user/page"]);
  }
  newUser(){
    this.router.navigate(["user/new"]);
  }
}
