import { Component } from '@angular/core';
import { Admin } from '../admin';
import { error } from 'toastr';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin : Admin= new Admin();


  constructor(private adminservice:AdminServiceService,
    private router:Router){

  }

onSubmit(){

  this.adminservice.adminLogin(this.admin).subscribe(data=>{
    alert("login sucessful")
    this.goTOAdminPage();

  },error=>{
    alert("Error")
  })

}

goTOAdminPage(){


  this.router.navigate(['admin/page']);
}
 
}
