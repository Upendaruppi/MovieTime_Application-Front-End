import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  private baseUrl = "http://localhost:8080/admin"
  constructor(private http:HttpClient) { }

  adminLogin(admin:Admin){
   return  this.http.post(`${this.baseUrl}/login`,admin);
  }

  addAdmin(admin:Admin){
    return this.http.post(`${this.baseUrl}/add`,admin);
  }

}
