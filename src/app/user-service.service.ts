import { Injectable } from '@angular/core';
import { UserAcess } from './user-acess';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userLogin: UserAcess | null = null;

  constructor() { }

  setUserLogin(user: UserAcess) {
    this.userLogin = user;
  }

  getUserLogin(): UserAcess | null {
    return this.userLogin;
  }

  logOut(){
    this.userLogin=null;
  }
}
