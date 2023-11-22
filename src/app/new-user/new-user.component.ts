import { Component } from '@angular/core';
import { UserAcess } from '../user-acess';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  private baseURL = "http://localhost:8080/user/add";

  constructor(private http:HttpClient,
    private router:Router
    ){}
   user:UserAcess=new UserAcess();
  onSubmit(){

    this.http.post(`${this.baseURL}`, this.user).subscribe(data=>{
      alert("sucess\n You can login now");
      this.goToLogin();
    },error=>{
      alert("User already exists \n You can login now")
    })

  }
  goToLogin(){
    this.router.navigate(['/user/login'])
  }
}
