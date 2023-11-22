import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {

constructor(private router:Router,
  private adminservice:AdminServiceService,
  ){}

admin: Admin = {
  name:"",
  email: "",
  password: "",
  role: ""
};


addAdmin(){

  this.adminservice.addAdmin(this.admin).subscribe((data:any)=>{
    alert("Admin added");
    this.admin.name="";
    this.admin.role="";
    this.admin.email="";
    this.admin.password="";


  },error=>{
    alert("error");
  })

}


  adminLogut(){
    this.router.navigate(['']);
  }
}
